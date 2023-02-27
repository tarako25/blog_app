import { Html, Head, Main, NextScript } from 'next/document'
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
      <title>Blog_sample</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

