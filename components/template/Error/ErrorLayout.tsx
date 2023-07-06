import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../Layout';

import { Text } from '@components/atom';
import { Button } from '@components/molecule';
import styled, { css, useTheme } from '@lib/styled-components';

const ErrorLayoutBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.colors.black};
`;

const ErrorContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ErrorTitleTextBlock = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 500;
`;

const ErrorContentTextBlock = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const buttonStyle = css`
  padding: 10px 20px;
  margin-right: 8px;
`;

const buttonTextStyle = css`
  color: ${props => props.theme.colors.black};
`;

const ErrorLayout: NextPage = function ErrorLayout() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <ErrorLayoutBlock>
      <Head>
        <title>trevari-fullstack-assignment</title>
        <meta name="description" content="trevari-fullstack-assignment" />
      </Head>
      <Layout>
        <ErrorContentBlock>
          <ErrorTitleTextBlock>
            페이지를 표시할 수 없습니다.
          </ErrorTitleTextBlock>
          <ErrorContentTextBlock>
            {`기술적인 문제로 페이지가 표시되지 않았습니다.\n아래 돌아가기 버튼 이용 부탁드리며, 이용에 불편을 드려 사과드립니다.`}
          </ErrorContentTextBlock>
          <ButtonBlock>
            <Button
              customStyle={buttonStyle}
              onClick={() => {
                router.push('/');
              }}
            >
              <Text
                color={theme.colors.text[400]}
                customStyle={buttonTextStyle}
              >
                돌아가기
              </Text>
            </Button>
          </ButtonBlock>
        </ErrorContentBlock>
      </Layout>
    </ErrorLayoutBlock>
  );
};

export default ErrorLayout;
