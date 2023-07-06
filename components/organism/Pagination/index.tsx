import { FC, useCallback, useState } from 'react';

import PaginationItem from './PaginationItem';

import { useUpdateEffect } from '@hooks/lifecycle';
import { useWindowSize } from '@hooks/window';
import { CSSProp } from '@lib/styled-components';

type PaginationProps = {
  pageLength: number;
  currentPage: number;
  pageSize: number;
  basePath: string;
  query?: object;
  customStyle?: CSSProp;
  onValueChange?: (e: any) => void;
};

/**
 Pagination
 @example
 <Pagination pages pagesCount currentPage/>
 @component
 @param {Pagination} props
 @property {number} props.pageLength
 @property {number} props.currentPage
 @property {number} props.pageSize
 @property {string} props.basePath
 @property {string} props.query
 @property {CSSProp} props.customStyle
 @property {(e: any)=> void} props.onValueChange
 @returns {React.FC} Pagination
 */
const Pagination: FC<PaginationProps> = function Pagination(props) {
  const {
    pageLength,
    pageSize,
    currentPage,
    basePath,
    query,
    customStyle = {},
    onValueChange = () => {},
  } = props;

  const {
    windowSize: { width },
  } = useWindowSize();

  const [pageComponentSize] = useState(40);
  const [isMax, setIsMax] = useState<boolean>();

  const maxComponentsCount = Math.floor(width / pageComponentSize) - 2;

  const pagesCount = Math.ceil((pageLength ?? 0) / pageSize);
  const pages = Array.from(
    {
      length: isMax ? maxComponentsCount : pagesCount,
    },
    (_, i) => i + 1,
  );

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < pagesCount;

  const getPageLink = (page: number) =>
    !query
      ? `${basePath}/${page}`
      : {
          pathname: `${basePath}/${page}`,
          query,
        };

  useUpdateEffect(() => {
    if (pagesCount && maxComponentsCount) {
      setIsMax(pagesCount > maxComponentsCount);
    }
  }, [pagesCount, maxComponentsCount]);

  const handlePageChange = useCallback(
    (page: number) => {
      onValueChange(page);
    },
    [onValueChange],
  );

  return (
    <PaginationItem
      pages={pages}
      pagesCount={pagesCount}
      currentPage={currentPage}
      isMax={isMax}
      hasPreviousPage={hasPreviousPage}
      hasNextPage={hasNextPage}
      customStyle={customStyle}
      getPageLink={getPageLink}
      handlePageChange={handlePageChange}
    />
  );
};

export default Pagination;
