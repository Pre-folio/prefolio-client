import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
