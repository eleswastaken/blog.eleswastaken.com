import { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from './googleAnalytics';
import Header from './Header';

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <GoogleAnalytics />
      </Head>
      <body>
        <Header></Header>
        <div id="body-wrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
