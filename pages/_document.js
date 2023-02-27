import { Html, Head, Main, NextScript } from 'next/document'
import { config } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

config.autoAddCss = false;

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
      <title>Blog_sample</title>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="鯖の煮つけと麻婆豆腐炒めチャンネルブログについてのページです"/>
      <meta name="keywords" content="自作ブログ, 鯖の煮つけと麻婆豆腐炒めチャンネルブログについて, ポテチ初心者"/>
      <meta name="google-site-verification" content="yPWWkIUSplswGDurIkWPz5ooliChjglbdm-yFdbZ_Aw" />
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

