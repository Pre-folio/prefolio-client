import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../components/layout/Layout';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/theme/theme';
import '../../public/static/fonts/style.css';
import Head from 'next/head';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import ScrollToTop from '../components/common/ScrollToTop';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>Pre:folio</title>
        <link rel='shortcut icon' href='/favicon.png' />
        <meta property='og: title' content='Pre:folio' />
        <meta
          property='og: description'
          content='대학생이라면 이용해야 하는 IT 스펙 저장소, Prepare Your Portfolio!'
        />
        <meta
          property='og: image'
          content='https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/ogImage.jpg'
        />
        <meta property='og:url' content='pre-folio.com' />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <Layout>
                <ScrollToTop />
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
