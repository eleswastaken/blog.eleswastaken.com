import nodemailer from 'nodemailer';

module.exports = function sendNoReplyEmail(emails, subject, body) {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_NO_REPLY_USERNAME,
      pass: process.env.EMAIL_NO_REPLY_PASS,
    },   
  });

  transporter.sendMail({
    from: process.env.EMAIL_NO_REPLY_USERNAME,
    to: emails,
    subject: subject,
    text: body,
  })

} 
