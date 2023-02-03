import { verifyJWTCookie } from "@/utils/tokens"
import dbConnect from '@/utils/mongoConfig';

export default async function authMiddleware (req, res, next) {

    await dbConnect();

    console.log('Going through authMiddleware...')
    const user = await verifyJWTCookie(req);

    if (!user) {
        console.log('AuthMiddleware rejected, redirecting to log-in...')
        res.redirect('/blog/admin/log-in')
    }

    console.log('AuthMiddleware succeeded...')
    req.currentUser = user;
    next()

}
