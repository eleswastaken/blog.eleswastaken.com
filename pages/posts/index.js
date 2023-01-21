
export default function PostsList({ posts }) {
  console.log(posts)
  return (
    <>
    <p>Hello, Posts List</p>

    </>
  )
}

export async function getServerSideProps({ params }) {
  const req = await fetch('http://localhost:3000/api/posts/');
  const data = await req.json();

  return {
      props: { posts: data },
  }
}
