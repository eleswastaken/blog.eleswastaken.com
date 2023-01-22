import defaultHandler from '../../_defaultHandler';
import dbConnect from '@/utils/mongoConfig';
import Post from '@/models/Post';
import { userExistsAndVerified } from '@/lib/auth';
import { signJWTCookie } from '@/utils/tokens';
import authMiddleware from '@/middleware/authMiddleware';

export default defaultHandler()
    .use(authMiddleware)
    .post(async (req, res) => {

        console.log('Creating a new blog post...')
        // CREATE BLOG POST
        // TODO This path is supposed to be protected!!!
        await dbConnect();

        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            // TODO Implement slug generation(unique + re-gen)
            slug: req.body.title,
        })

        // TODO Error Handling
        post.save()

        res.redirect('/posts')
    })
