import React from 'react';
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
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { withTranslateRoutes } from 'next-translate-routes';

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
      </Head>

      <main>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
              <SpeedInsights />
            </ChakraProvider>
          </Hydrate>
        </QueryClientProvider>
      </main>
    </>
  );
}

export default withTranslateRoutes(appWithTranslation(App));
