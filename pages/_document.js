import { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from '@/components/googleAnalytics';
import Header from '@/components/_header';

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <GoogleAnalytics />
      </Head>
      <body>
        <NextScript />
        <div id="body-wrapper">
          <Header />
          <Main />
        </div>
      </body>
    </Html>
  )
}
