import { clearUser } from "@/utils/tokens";
import defaultHandler from "../_defaultHandler";

export default defaultHandler()
.post(async (req, res) => {

    clearUser(res)
    res.status(200).send("Successfully logged out...").end()

})