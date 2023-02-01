import defaultHandler from '@/pages/_defaultHandler';
import dbConnect from '@/utils/mongoConfig';
import Post from '@/models/Post';
import authMiddleware from '@/middleware/blogAuthMiddleware';

export default defaultHandler()
    .use(authMiddleware)
    .post(async (req, res) => {

        console.log('Creating a new blog post...')
        // CREATE BLOG POST
        // TODO This path is supposed to be protected!!!
        await dbConnect();

        console.log(req.body.preview)

        const post = new Post({
            title: req.body.title,
            preview: req.body.preview,
            content: req.body.content,
            // TODO Implement slug generation(unique + re-gen)
            slug: req.body.title,
        })
        console.log(post.preview)

        // TODO Error Handling
        post.save()

        res.redirect('/blog')
    })
