import Head from 'next/head';

import EmailListForm from '@/components/_email_list_form';

export default function HeroSection() {

  return(<>
      <Head>
        <title>Eles Ismailov</title>
      </Head>
      <section className='hero'>
        <h1>It's possible.</h1>
        <p>Whatever it is that you want...</p>
        <p>You can have it.</p>
      </section>
      <EmailListForm />
  </>)

}
