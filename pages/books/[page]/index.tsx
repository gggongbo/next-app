import { Book } from '@domain/cores';
import { BookDTO } from '@domain/dtos';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import BooksPage from './BooksPage';
import BooksLayout from '../BooksLayout';

import { useUpdateEffect } from '@hooks/lifecycle';
import { usePrevious } from '@hooks/state';
import axios from '@lib/axios';
import { lodash } from '@lib/lodash';
import { useQuery } from '@lib/react-query';
import { booksKeys } from '@utils/queryUtils';
import routers from '@utils/routers';

const BooksPageContainer: NextPage = function BooksPageContainer() {
  const router = useRouter();
  const {
    query: { page, search },
  } = router;

  if (!lodash.isString(search) || !lodash.isNumber(Number(page)))
    throw new Error('[frontend] invalid query string');

  const [inputKeyword, setInputKeyword] = useState<string>(search);
  const [searchKeyword, setSearchKeyword] = useState<string>(search);
  const [searchPage, setSearchPage] = useState<number>(Number(page));
  const [bookList, setBookList] = useState<Book[]>();
  const [pageLength, setPageLength] = useState<number>();
  const [pageSize] = useState<number>(10);

  const prevKeyword = usePrevious(searchKeyword);
  const prevPage = usePrevious(searchPage);

  const { isLoading, refetch: searchBook } = useQuery({
    queryKey: booksKeys.searchBook({
      search: searchKeyword,
      page: Number(page),
    }),
    queryFn: async () => {
      if (!searchKeyword) return null;

      const response = await axios.get(
        `/api/books/${searchKeyword}/${searchPage}`,
      );
      const responseData: {
        totalPage: number;
        books: BookDTO[];
      } = response.data;

      return responseData;
    },
    onSuccess(item) {
      if (!item) return;
      const { totalPage, books } = item;
      setPageLength(totalPage);
      setBookList(books.map(book => new Book(book)));
    },
    onError() {
      alert(
        '도서 리스트를 가져오는데 에러가 발생했습니다. operator는 최대 1개, 키워드는 최대 2개 입력이 가능합니다.',
      );
      router.replace(routers.books.path);
    },
    retry: 0,
  });

  useUpdateEffect(() => {
    if (searchKeyword !== prevKeyword || searchPage !== prevPage) {
      searchBook();
    }
  }, [searchKeyword, searchPage]);

  const onPageChange = useCallback((value: number) => {
    setSearchPage(value);
  }, []);

  const onInputValueChange = useCallback((value: string) => {
    if (!value || !value?.trim()?.length) return;
    setInputKeyword(value);
  }, []);

  const onSearchButtonClick = useCallback(async () => {
    if (!searchKeyword || !searchKeyword?.trim()?.length) return;
    if (!!prevKeyword && prevKeyword !== inputKeyword) {
      setSearchPage(1);
    }
    setSearchKeyword(inputKeyword);
  }, [inputKeyword, prevKeyword, searchKeyword]);

  return (
    <BooksLayout>
      <BooksPage
        inputKeyword={inputKeyword}
        searchKeyword={searchKeyword}
        searchPage={searchPage}
        bookList={bookList}
        pageLength={pageLength}
        pageSize={pageSize}
        basePath={routers.books.path}
        isLoading={isLoading}
        onInputValueChange={onInputValueChange}
        onSearchButtonClick={onSearchButtonClick}
        onPageChange={onPageChange}
      />
    </BooksLayout>
  );
};

export default BooksPageContainer;
