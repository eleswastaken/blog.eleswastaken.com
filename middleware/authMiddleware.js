import { verifyJWTCookie } from "@/utils/tokens"

export default async function authMiddleware (req, res, next) {

    console.log('Going through authMiddleware...')
    const user = await verifyJWTCookie(req);

    if (!user) {
        console.log('AuthMiddleware rejected, redirecting to log-in...')
        res.redirect('/log-in')
    }

    console.log('AuthMiddleware succeeded...')
    req.currentUser = user;
    next()

}