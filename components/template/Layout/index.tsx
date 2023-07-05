import { Header } from '@components/organism';
import Head from 'next/head';
import { FC } from 'react';

import styled from '@lib/styled-components';

const LayoutBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const MainBlock = styled.div`
  padding: 0px 30px;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 0px 20px;
  }
`;

type LayoutProps = {
  children: React.ReactElement;
};

const Layout: FC<LayoutProps> = function Layout({ children }) {
  return (
    <LayoutBlock>
      <Head>
        <title>trevari-fullstack-assignment</title>
        <meta name="description" content="trevari-fullstack-assignment" />
      </Head>
      <Header />
      <MainBlock>{children}</MainBlock>
    </LayoutBlock>
  );
};

export default Layout;
