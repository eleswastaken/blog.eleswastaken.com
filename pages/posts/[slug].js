
import { useRouter } from 'next/router'

export default function Post({ post }) {
    return (
        <>
            <p>Hello post-slug</p>
            <h1>{ post.title }</h1>
            <article>
                <pre>{ post.content }</pre>
            </article>
        </>
    )
}

export async function getServerSideProps({ params }) {
  const req = await fetch('http://localhost:3000/api/posts/' + params.slug);
  const data = await req.json();

  return {
      props: { post: data.post },
  }
}