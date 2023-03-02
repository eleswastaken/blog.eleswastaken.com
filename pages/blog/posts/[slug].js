import Head from 'next/head';

import dbConnect from '@/utils/mongoConfig';
import markdownIt from 'markdown-it';
import PostModel from '@/models/Post';

export default function Post({ p }) {
  const date = new Date(p.createdAt)
  const formatted = date.toLocaleDateString('en-US', {year: "numeric", month: "long", day:"numeric"})
  return (
      <>
        <Head>
          <title>{ p.title }</title>
        </Head>
        <article className='blog-post'>
          <time dateTime={date}>{ formatted }</time>
          <div className="meta-data">
            <div className="category">
              My Life
            </div>
            <hr />
            <div className="writer">
              Eles Ismailov
            </div>
          </div>

          {!!p.preview &&
            <div className="image">
              <img src={p.preview} alt={p.title + " preview"} />              
            </div>
          }

          <h1 className='title'>{ p.title }</h1>
          <hr className='main-hr'/>
          <div className="wrapper" dangerouslySetInnerHTML={{__html: (p.html)}}></div>
        </article>
      </>
  )
}
// { p.preview && 
//   <div className="preview">
//     <img src={ p.preview } alt={ p.title + " preview"} />
//   </div>
// }
export async function getServerSideProps({ params }) {

  await dbConnect()

    // TODO Error handling
  const post = await PostModel.findOne({slug: params.slug});
  const md = markdownIt();
  const htmlContent = md.render(post.content)
  const p = {
    html: htmlContent,
    title: post.title,
    createdAt: post.createdAt,
    preview: post.preview,
  }

  return {
      props: { p: JSON.parse(JSON.stringify(p)) },
  }
}
