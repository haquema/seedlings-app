require("dotenv").config();
const cron = require("node-cron")
const sgMail = require("@sendgrid/mail");
const apiKey = `${process.env.SENDGRID_API_KEY}`;
console.log("SendGrid key ", apiKey);

const emailFrom = `${process.env.SENDGRID_EMAIL}`;
console.log(emailFrom)


const sendReminder = async (req, res) => {


 const {email,plantname} = req.body

 sgMail.setApiKey(apiKey);   

 console.log(req.body)

 const msg = {
    
    to: email,
    from: emailFrom,
    subject: 'Reminder from Seedlings',
    text: `Don't forget to water your plant ${plantname}`,
    html:  `<h1>Reminder from Seedlings</h1>
    <p>Don't forget to water your ${plantname}</p>`,
  };

  try {
    sgMail.send(msg);
    res.sendStatus(200);
  }

  catch { (err) => console.log(err.response.body)}
};




module.exports = sendReminder;
