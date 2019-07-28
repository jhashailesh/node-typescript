import nodemailer from 'nodemailer';
import { emailConfig } from '../../config';
const {host, port, secure, user, pass, from, productionMode:pm} = emailConfig;
// async..await is not allowed in global scope, must use a wrapper

interface IEmailBody {
  subject : string,
  text?:  string,
  html: string
}


const createTransporter = async() => {
   // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  return nodemailer.createTransport({
    host: pm ? host : "smtp.ethereal.email",
    port: pm ? port : 587,
    secure: pm ? secure : false, // true for 465, false for other ports
    auth: {
      user: pm ? user : testAccount.user, // generated ethereal user
      pass: pm ? pass : testAccount.pass // generated ethereal password
    }
  });

}

const optionBody = (emails: string[], options: IEmailBody) => {
    return {
      from: from || '"Hello Folks" <jhashailesh3108@gmail.com>', // sender address
      to: emails.join(), // list of receivers
      subject: options.subject, // Subject line
      text: options.text, // plain text body
      html: options.html // html body
    }
  }


export async function email(emails: string[], options: IEmailBody):Promise<{messageId: string, pathInfo:string| false}>{
  try {

  const transporter = await createTransporter();

  // send mail with defined transport object
  const info = await transporter.sendMail(optionBody(emails, options));

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  return {
    messageId : info.messageId,
    pathInfo: nodemailer.getTestMessageUrl(info)
  }
  } catch (e) {
    throw new Error(e);
  }
}

