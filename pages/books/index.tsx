import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import Books from './Books';
import BooksLayout from './BooksLayout';
import routers from '../routers';

const BooksContainer: NextPage = function BooksContainer() {
  const router = useRouter();

  const [searchKeyword, setSearchKeyword] = useState<string>();

  const onInputValueChange = useCallback((value: string) => {
    if (!value || !value?.trim()?.length) return;
    setSearchKeyword(value);
  }, []);

  const onSearchButtonClick = useCallback(async () => {
    if (!searchKeyword || !searchKeyword?.trim()?.length) return;
    router.replace({
      pathname: `${routers.books.path}/1`,
      query: { search: searchKeyword },
    });
  }, [router, searchKeyword]);

  return (
    <BooksLayout>
      <Books
        searchKeyword={searchKeyword}
        onInputValueChange={onInputValueChange}
        onSearchButtonClick={onSearchButtonClick}
      />
    </BooksLayout>
  );
};

export default BooksContainer;
