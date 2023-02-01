import { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from './googleAnalytics';
import Header from './Header';

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <GoogleAnalytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
