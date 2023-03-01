import defaultHandler from '@/pages/_defaultHandler';
import dbConnect from '@/utils/mongoConfig';
import Post from '@/models/Post';
import authMiddleware from '@/middleware/blogAuthMiddleware';

import slugify from 'slugify';

export default defaultHandler()
    .use(authMiddleware)
    .post(async (req, res) => {

        // CREATE BLOG POST
        // TODO This path is supposed to be protected!!!
        await dbConnect();

        console.log(req.body.preview)

        const post = new Post({
            title: req.body.title,
            preview: req.body.preview,
            content: req.body.content,
            // TODO Implement slug generation(unique + re-gen)
            slug: slugify(req.body.title, {
              lower: true,
            }),
        })
      
        // TODO Error Handling
        post.save()

        res.redirect('/blog')
    })
