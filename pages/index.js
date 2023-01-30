import PostModel from '@/models/Post';
import dbConnect from '@/utils/mongoConfig';

export default function PostsList({ posts }) {
  const listItems = posts.map(d => {
    const date = new Date(d.createdAt)
    const formatted = date.toLocaleDateString('en-US', {year: "numeric", month: "long", day:"numeric"})
    return(
      <li key={date}>
        <a className='preview' href={'/posts/' + d.slug }>
          <div className="wrapper">
            <div className="image"></div>
          </div>
        </a>
        <div className="text-container">
          <a className='title' href={'/posts/' + d.slug }>
            <h2>{ d.title }</h2>
          </a>
          <hr />
          <time dateTime={date}>{ formatted }</time>
        </div>
      </li>
    )
  })
  return (
    <section className='posts-index'>
      <h1>Notes To My Own Self</h1>
      <ul className='posts-list'>{ listItems }</ul>
    </section>)
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
