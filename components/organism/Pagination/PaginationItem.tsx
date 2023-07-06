import { FC } from 'react';

import { Text } from '@components/atom';
import { LinkBox } from '@components/molecule';
import { lodash } from '@lib/lodash';
import styled, { CSSProp, css, useTheme } from '@lib/styled-components';

type PaginationItemProps = {
  pages: number[];
  pagesCount: number;
  currentPage: number;
  isMax?: boolean;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  customStyle?: CSSProp;
  getPageLink?: (e: any) => string | { pathname: string; query: object };
  handlePageChange?: (e: any) => void;
};

const PaginationItemBlock = styled.div<{ customStyle?: CSSProp }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${props => props.customStyle};
`;

const ArrowBlock = styled.div`
  width: 30px;
  text-align: center;
`;

const pageCustomStyle = css`
  margin: 0px 2px;
`;

/**
 PaginationItem
 @example
 <PaginationItem pages pagesCount currentPage/>
 @component
 @param {PaginationItem} props
 @property {number[]} props.pages
 @property {number} props.pagesCount
 @property {number} props.currentPage
 @property {boolean} props.isMax
 @property {boolean} props.hasPreviousPage
 @property {boolean} props.hasNextPage
 @property {CSSProp} props.customStyle
 @property {(e: any) => string} props.getPageLink
 @property {(e: any)=> void} props.handlePageChange
 @returns {React.FC} PaginationItem
 */
const PaginationItem: FC<PaginationItemProps> = function PaginationItem(props) {
  const {
    pages,
    pagesCount,
    currentPage,
    isMax,
    hasPreviousPage,
    hasNextPage,
    customStyle = {},
    getPageLink = () => '',
    handlePageChange = () => {},
  } = props;

  const theme = useTheme();

  if (lodash.isUndefined(isMax)) return null;

  return (
    <PaginationItemBlock data-testid="pagination" customStyle={customStyle}>
      <ArrowBlock>
        {!!hasPreviousPage && (
          <LinkBox
            router={getPageLink(currentPage - 1)}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={!hasPreviousPage}
          >
            <Text size={20}>&lt;</Text>
          </LinkBox>
        )}
      </ArrowBlock>
      {pages.map((page: number) => (
        <LinkBox
          key={page}
          router={getPageLink(page)}
          customStyle={pageCustomStyle}
          onClick={() => handlePageChange(page)}
        >
          <Text
            size={20}
            color={
              page === currentPage
                ? theme.colors.text[600]
                : theme.colors.text[200]
            }
            weight={page === currentPage ? 'bold' : 'normal'}
          >
            {page}
          </Text>
        </LinkBox>
      ))}
      {!!isMax && (
        <>
          <Text size={20} color={theme.colors.text[200]}>
            ...
          </Text>
          <LinkBox
            key={pagesCount}
            router={getPageLink(pagesCount)}
            customStyle={pageCustomStyle}
            onClick={() => handlePageChange(pagesCount)}
          >
            <Text
              size={20}
              color={
                pagesCount === currentPage
                  ? theme.colors.text[600]
                  : theme.colors.text[200]
              }
              weight={pagesCount === currentPage ? 'bold' : 'normal'}
            >
              {pagesCount}
            </Text>
          </LinkBox>
        </>
      )}
      <ArrowBlock>
        {!!hasNextPage && (
          <LinkBox
            router={getPageLink(currentPage + 1)}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={!hasNextPage}
          >
            <Text size={20}>&gt;</Text>
          </LinkBox>
        )}
      </ArrowBlock>
    </PaginationItemBlock>
  );
};

export default PaginationItem;
