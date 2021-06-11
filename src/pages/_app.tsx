import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=B612:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>cezarcozta</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
