import { FC } from 'react';

import { Text } from '@components/atom';
import styled from '@lib/styled-components';

const HeaderBlock = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  -webkit-box-shadow: 0px 1px 1px 0px
    ${props => `${props.theme.colors.black}10`};
  box-shadow: 0px 1px 1px 0px ${props => `${props.theme.colors.black}10`};
  z-index: 999;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 20px;
  }
`;

/**
 Header

 @example
 <Header/>
 @returns {React.FC} Header
 */
const Header: FC = function Header() {
  return (
    <HeaderBlock>
      <Text size={25} weight="bold">
        도서 리스트 검색
      </Text>
    </HeaderBlock>
  );
};

export default Header;
