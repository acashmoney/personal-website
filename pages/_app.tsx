import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/A.svg" />
      </Head>
      <main className="min-h-screen flex flex-col overflow-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}
