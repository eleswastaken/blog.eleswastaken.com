import markdownIt from 'markdown-it';

export default function Post({ post }) {
    return (
        <>
            <h1>{ post.title }</h1>
            <article dangerouslySetInnerHTML={{__html: (post.html)}}>
            </article>

        </>
    )
}

export async function getServerSideProps({ params }) {
  const req = await fetch('http://localhost:3000/api/posts/' + params.slug);
  const data = await req.json();

    const md = markdownIt();
    data.post.html = md.render(data.post.content)


  return {
      props: { post: data.post },
  }
}