import { Error, ErrorBoundary, Layout } from '@components/template';
import { queryClientOption } from '@utils/queryUtils';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import '@styles/globals.css';

import { QueryClient, QueryClientProvider } from '@lib/react-query';
import { ThemeProvider } from '@lib/styled-components';
import { theme } from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(queryClientOption));

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary fallback={<Error />}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
