import dbConnect from '@/utils/mongoConfig';
import Post from '@/models/Post';

export default async function ApiPostsSlug(req, res) {
    const { slug } = req.query;

    await dbConnect()

    // TODO Error handling
    const post = await Post.findOne({slug: slug});

    res.json({post})
}
