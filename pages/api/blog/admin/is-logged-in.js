import defaultHandler from '@/pages/_defaultHandler';
import authMiddleware from '@/middleware/blogAuthMiddleware';

export default defaultHandler()
    .use(authMiddleware)
    .get(async (req, res) => {
        res.status(200).end()
    })
