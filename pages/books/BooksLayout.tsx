import { FC, ReactNode } from 'react';

import { Text } from '@components/atom';
import styled from '@lib/styled-components';

const BooksBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: auto;
`;

const GuideBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 50px 0px 30px 0px;
  align-items: center;
  justify-content: center;
`;

type BooksLayoutProps = {
  children?: ReactNode;
};

const BooksLayout: FC<BooksLayoutProps> = function BooksLayout(props) {
  const { children } = props;

  return (
    <BooksBlock>
      <GuideBlock>
        <Text size={16}>
          or(|) operator로 두 가지 키워드가 포함된 검색이 가능하고, not(-)
          operator로 뒤의 키워드는 제외한 검색이 가능합니다.
        </Text>
      </GuideBlock>
      {children}
    </BooksBlock>
  );
};

export default BooksLayout;
