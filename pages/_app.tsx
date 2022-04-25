import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider >
      <Head>
        <title>Awesome Cockails</title>
        <meta
          name="description"
          content="Application that allows search for Cocktails"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/apple-touch-icon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.ico"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
