require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const apiKey = `${process.env.SENDGRID_API_KEY}`;
const cron = require("node-cron");
const emailFrom = `${process.env.SENDGRID_EMAIL}`;

const scheduleReminder = (req, res) => {
  const { email, plantname, interval } = req.body;
  console.log(interval);

  if (interval === "minute") {
    cron.schedule("* * * * *", () => {
      sendReminder({ body: { email, plantname } });
    });
    res.sendStatus(200);
  } else if (interval === "twiceADay") {
    cron.schedule("0 0,12 * * *", () => {
      sendReminder({ body: { email, plantname } });
    });
    res.sendStatus(200);
  } else if (interval === "onceADay") {
    cron.schedule("0 0 * * *", () => {
      sendReminder({ body: { email, plantname } });
    });
    res.sendStatus(200);
  } else {
    console.log("invalid");
  }
};

const sendReminder = async (req, res) => {
  sgMail.setApiKey(apiKey);

  const { email, plantname } = req.body;

  console.log(req.body);

  const msg = {
    to: email,
    from: emailFrom,
    subject: "🪴 Reminder from Seedlings 🪴 ",
    text: `Don't forget to water your plant ${plantname}`,
    html: `<p>Don't forget to water your ${plantname}`,
  };

  try {
    sgMail.send(msg);
    res.sendStatus(200);
  } catch {
    (err) => console.log(err.response.body);
  }
};

module.exports = scheduleReminder;
