import dbConnect from '../../../utils/mongoConfig';
import Post from '../../../models/Post';

export default async function handler(req, res) {
  await dbConnect()

  const posts = await Post.find({});
  res.json({posts})
}