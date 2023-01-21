
import dbConnect from '../../../utils/mongoConfig';
import Post from '../../../models/Post';

export default async function handler(req, res) {

    if (req.method === 'GET') {

    } else if (req.method === 'POST') {
        // CREATE BLOG POST
        // TODO This path is supposed to be protected!!!

        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            // TODO Implement slug generation(unique + re-gen)
            slug: req.body.title,
        })

        // TODO Error Handling
        post.save()

        res.redirect('/')
    }
}