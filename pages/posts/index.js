
export default function PostsList({ posts }) {
  console.log(posts)
  const listItems = posts.posts.map(d => {
    return(
      <li>
        <a href={'/posts/' + d.slug }><h2>{ d.title }</h2></a>
        <p>{ d.createdAt }</p>
      </li>
    )
  })
  return (<>
    <h1>Articles</h1>
    <ul>{ listItems }</ul>
  </>)
}

export async function getServerSideProps({ params }) {
  const req = await fetch('http://localhost:3000/api/posts/');
  const data = await req.json();

  return {
      props: { posts: data },
  }
}
