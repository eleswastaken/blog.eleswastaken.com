
import Head from 'next/head';

export default function Confirmed() {

  return(<>
      <Head>
        <title>Successfully Confirmed</title>
      </Head>
      <section className='subscribed'>
        <div className='wrapper'>
          <h1>Your email has been confirmed.</h1>
          <p>Thank you for your subscription!</p>
        </div>
      </section>
  </>)

}
