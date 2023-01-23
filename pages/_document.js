import { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from './googleAnalytics';
import Header from './Header';

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <GoogleAnalytics />
      </Head>
      <body>
        <div id="body-wrapper">
          <Header></Header>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
