import defaultHandler from '@/pages/_defaultHandler';
import dbConnect from '@/utils/mongoConfig';

import EmailUser from '@/apps/email_list/models/EmailUser';
import ConfirmationToken from '@/apps/email_list/models/ConfirmationToken';

export default defaultHandler()
  .get(async (req, res) => {

    await dbConnect();

    const t = req.query.token;

    // TODO: IMPLEMENT CHECK WHETHER TOKEN IS_ACTIVE 

    const confirmation_token = await ConfirmationToken.findOne({ token: t });
    const email_user = await EmailUser.findById(confirmation_token.email_user);

    confirmation_token.is_active = false;
    confirmation_token.save()

    email_user.is_confirmed = true;
    email_user.save()

    res.redirect('/email-list/confirmed')
  })
