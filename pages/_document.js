import { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from '@/components/googleAnalytics';
import Header from '@/components/_header';
import Footer from '@/components/_footer';

import dbConnect from '@/utils/mongoConfig';

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <GoogleAnalytics />
          <script defer src="/headerScript.js" />
      </Head>
      <body>
        <NextScript />
        <div id="body-wrapper">
          <Header />
          <Main />
          <Footer />
        </div>
      </body>
    </Html>
  )
}

export async function getServerSideProps({ params }) {

  return await dbConnect()

}
