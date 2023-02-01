import dbConnect from '../../../utils/mongoConfig';
import Post from '../../../models/Post';

export default async function handler(req, res) {
  await dbConnect()

  const posts = await Post.find({}).select({
    'title': 1,
    'slug': 1,
    'createdAt': 1,
    '_id': 0,
  });
  res.json({posts})
}