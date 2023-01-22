import PostModel from '@/models/Post';
import dbConnect from '@/utils/mongoConfig';

export default function PostsList({ posts }) {
  const listItems = posts.map(d => {
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
  await dbConnect()

  const posts = await PostModel.find({}).select({
    'title': 1,
    'slug': 1,
    'createdAt': 1,
    '_id': 0,
  });

  return {
      props: { posts: JSON.parse(JSON.stringify(posts)) },
  }
}
