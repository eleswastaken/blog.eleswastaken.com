import { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from './googleAnalytics';
import Header from './Header';

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <GoogleAnalytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
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
