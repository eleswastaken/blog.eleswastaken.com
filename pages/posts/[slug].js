import dbConnect from '@/utils/mongoConfig';
import markdownIt from 'markdown-it';
import PostModel from '@/models/Post';

export default function Post({ p }) {
    return (
        <>
            <h1>{ p.title }</h1>
            <article dangerouslySetInnerHTML={{__html: (p.html)}}>
            </article>

        </>
    )
}

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

  }

  return {
      props: { p: JSON.parse(JSON.stringify(p)) },
  }
}