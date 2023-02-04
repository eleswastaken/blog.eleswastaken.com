import { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from './googleAnalytics';
import Header from './header';

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <GoogleAnalytics />
      </Head>
      <body>
        <NextScript />
        <Header />
        <div id="body-wrapper">
          <Main />
        </div>
      </body>
    </Html>
  )
}
