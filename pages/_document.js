import { Html, Head, Main, NextScript } from 'next/document'
import { config } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

config.autoAddCss = false;

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <Link
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-NMq7AxBKilDxwyRvamvX8Qz7VGPnYPfQj7Vwv+8WkfI+gsxjKewlZ00zvX8iDTTn"
          crossOrigin="anonymous"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

