import React from 'react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { NextIntlClientProvider } from 'next-intl';

import 'aos/dist/aos.css';
import '../src/shared/styles/global.css';
import { AppProps } from 'next/app';
import { theme } from '@/src/shared/design/Theme';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href="/images/favicon.ico" /> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
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
        <NextIntlClientProvider
          locale={router.locale ?? 'en'}
          messages={pageProps.messages}
        >
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </NextIntlClientProvider>
      </main>
    </>
  );
}

export default App;
