
import defaultHandler from '@/pages/_defaultHandler';
import dbConnect from '@/utils/mongoConfig';

import generateRandomToken from '@/utils/random_token';
import sendNoReplyEmail from '@/utils/send_email';

import EmailUser from '@/apps/email_list/models/EmailUser';
import ConfirmationToken from '@/apps/email_list/models/ConfirmationToken';

export default defaultHandler()
  .post(async (req, res) => {

    await dbConnect();

    // TODO: IMPLEMENT EMAIL IS ALREADY SUBSCRIBED

    const email_user = new EmailUser({
      email: req.body.email,
    });
    email_user.save()

    const tokens_to_avoid = await ConfirmationToken.find({ is_active: true }).select('token')
    const token = generateRandomToken(48, tokens_to_avoid)

    const confirmation_token = new ConfirmationToken({
      email_user: email_user,
      token: token,
    });
    confirmation_token.save()

    const confirmation_link = 'http://' + req.headers.host + '/api/email-list/confirm?token=' + token;

    console.log('Sending email...')
    // SENDING EMAIL CONFIRMATION
    sendNoReplyEmail([email_user.email], 'Confirm Subscription', '' + confirmation_link)

    res.redirect('/email-list/subscribed/')

  })
