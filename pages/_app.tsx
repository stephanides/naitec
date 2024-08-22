import React, { useEffect } from 'react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';

import 'aos/dist/aos.css';
import '../src/shared/styles/global.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-creative';
import 'yet-another-react-lightbox/styles.css';
import { AppProps } from 'next/app';
import { theme } from '@/src/shared/design/Theme';
import { useRouter } from 'next/router';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <style>@import url("https://use.typekit.net/niv7nnt.css");</style>
      </Head>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* TODO: add GTM number */}
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-F6P7S4YP2P`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F6P7S4YP2P', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
      <main>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </Hydrate>
        </QueryClientProvider>
      </main>
    </>
  );
}

export default appWithTranslation(App);
