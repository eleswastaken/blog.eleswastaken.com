import { userExistsAndVerified } from "@/lib/auth";
import { signJWTCookie } from "@/utils/tokens";
import defaultHandler from "@/pages/_defaultHandler";

export default defaultHandler()
.post(async (req, res) => {

    const user = await userExistsAndVerified(req.body);

    if (user) {
        signJWTCookie(res, user);
        res.redirect('/blog/admin/')
    } else {
        res.status(404).send("Wrong credentials.");
    }

})
