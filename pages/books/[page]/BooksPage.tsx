import { Book } from '@domain/cores';
import { FC, useCallback } from 'react';

import BooksPageItem from './BooksPageItem';

import { Text } from '@components/atom';
import { Button, InputText } from '@components/molecule';
import { ListBox, Pagination } from '@components/organism';
import styled, { css, useTheme } from '@lib/styled-components';

const InputBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ListBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;

const LoadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  align-items: center;
  justify-content: center;
`;

const inputStyle = css`
  display: flex;
  flex: 1;
  font-size: 20px;
  border-radius: 6px 0px 0px 6px;
  padding: 10px 0px;
  border-color: ${props => props.theme.colors.gray[500]};
`;

const inputPlacehoderStyle = css`
  color: ${props => props.theme.colors.gray[400]};
`;

const searchButtonStyle = css`
  padding: 10px 50px;
  background-color: ${props => props.theme.colors.orange};
  border-radius: 0px 6px 6px 0px;
  border: 1px solid ${props => props.theme.colors.orange};
  border-left: 0px;
`;

const listBoxStyle = css`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const paginationStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0px;
`;

type BooksPageProps = {
  inputKeyword?: string;
  searchKeyword?: string;
  searchPage?: number;
  bookList?: Book[];
  pageLength?: number;
  pageSize?: number;
  basePath?: string;
  isLoading?: boolean;
  onPageChange: (value: number) => void;
  onInputValueChange: (value: string) => void;
  onSearchButtonClick: () => void;
};

const BooksPage: FC<BooksPageProps> = function BooksPage(props) {
  const {
    inputKeyword,
    searchKeyword,
    searchPage = 1,
    bookList = [],
    pageLength = 0,
    pageSize = 0,
    basePath = '/books',
    isLoading = false,
    onPageChange,
    onInputValueChange,
    onSearchButtonClick,
  } = props;

  const theme = useTheme();

  const renderItem = useCallback(
    (renderItemProps: { item: Book; index: number }) => {
      const { item } = renderItemProps;
      if (!item) return null;
      return <BooksPageItem item={item} />;
    },
    [],
  );

  return (
    <>
      <InputBlock>
        <InputText
          value={inputKeyword}
          customStyle={inputStyle}
          onValueChange={onInputValueChange}
          placeholder="Book Name"
          placeholderStyle={inputPlacehoderStyle}
        />
        <Button customStyle={searchButtonStyle} onClick={onSearchButtonClick}>
          <Text size={20} color={theme.colors.white} weight={500}>
            검색
          </Text>
        </Button>
      </InputBlock>
      {isLoading ? (
        <LoadingBlock>
          <Text size={20} weight="bold" color={theme.colors.gray[400]}>
            Loading...
          </Text>
        </LoadingBlock>
      ) : (
        <>
          {bookList?.length > 0 && (
            <ListBoxBlock>
              <ListBox
                data={bookList}
                customStyle={listBoxStyle}
                renderItem={renderItem}
              />
            </ListBoxBlock>
          )}
          <Pagination
            pageLength={pageLength}
            currentPage={searchPage}
            pageSize={pageSize}
            basePath={basePath}
            query={{ search: searchKeyword }}
            customStyle={paginationStyle}
            onValueChange={onPageChange}
          />
        </>
      )}
    </>
  );
};

export default BooksPage;
