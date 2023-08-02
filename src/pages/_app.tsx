import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>まべ五稜郭消化器・内視鏡クリニック</title>
        <link rel="icon" href="/ロゴ最終盤.svg" />
        {/* 他のメタ情報やCSSなどもここに追加することができます */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
