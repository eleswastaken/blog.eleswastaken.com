import Head from 'next/head';

export default function Subscribed() {

  return(<>
      <Head>
        <title>Successfully Subscribed</title>
      </Head>
      <section className='subscribed'>
        <div className='wrapper'>
          <h1>Subscribed.</h1>
          <p>Confirmation email has been sent to you.</p>
          <p>Thank you for your subscription!</p>
        </div>
      </section>
  </>)

}
