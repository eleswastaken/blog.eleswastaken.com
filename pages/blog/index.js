import Head from 'next/head';

import PostModel from '@/models/Post';
import dbConnect from '@/utils/mongoConfig';

export default function PostsList({ posts }) {
  const listItems = posts.map(d => {
    const date = new Date(d.createdAt)
    const formatted = date.toLocaleDateString('en-US', {year: "numeric", month: "long", day:"numeric"})
    return(
      <li key={date}>
        <a className='preview' href={'/blog/posts/' + d.slug }>
          <div className="wrapper">
            <div className="image">
              {!!d.preview &&
                <img src={d.preview} alt={d.title + " preview"} />              
              }
            </div>
          </div>
        </a>
        <div className="text-container">
          <a className='title' href={'/blog/posts/' + d.slug }>
            <h2>{ d.title }</h2>
          </a>
          <hr />
          <time dateTime={date}>{ formatted }</time>
        </div>
      </li>
    )
  })
  return (<>
      <Head>
        <title>A Blog</title>
      </Head>
      <section className='posts-index'>
        <h1>A Blog</h1>
        <ul className='posts-list'>{ listItems }</ul>
      </section>
    </>)
}

export async function getStaticProps({ params }) {
  // to request other posts you will need to turn to the api and request from the client side
  let limit = 10;

  await dbConnect()

  const posts = await PostModel.find({})
    .sort({'createdAt': -1})
    .limit(limit)
    .select({
    'title': 1,
    'slug': 1,
    'preview': 1,
    'createdAt': 1,
    '_id': 0,
  });

  return {
      props: { posts: JSON.parse(JSON.stringify(posts)) },
      revalidate: 10,
  }
}
