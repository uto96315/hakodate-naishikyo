import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>まべ五稜郭消化器・内視鏡クリニック</title>
        <link rel="icon" href="/ロゴ最終盤.svg" />
        <meta name="description" content="函館市五稜郭に2023年10月から開院する消化器・内視鏡クリニックです。お忙しい方でも無理なく通院可能なオンライン診療や即日検査を行なっています。" />
        {/* 他のメタ情報やCSSなどもここに追加することができます */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
