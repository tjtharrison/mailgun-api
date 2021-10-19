const Mailgun = require("mailgun-js");

const mailgunApiKey = process.env.MAILGUN_API_KEY;
const mailgunDomain = process.env.MAILGUN_DOMAIN;
const mailgunSender = process.env.MAILGUN_SENDER;

// Define Mailgun Message
const mailgun = new Mailgun({apiKey: mailgunApiKey, domain: mailgunDomain});



function mailgunSend(req,res) {
    const data = {
        from: mailgunSender,
        to: req.body.recipient,
        subject: req.body.subject,
        html: req.body.message
    }

    //console.log(req.body)
    mailgun.messages().send(data, function (err, body) {
            if (err) {
                res.json({"error":err,"status":"delivered","from":data.from, "to":data.to, "subject":data.subject});
                console.log({"error":err,"status":"delivered","from":data.from, "to":data.to, "subject":data.subject});
            }
            else {
                res.json({"status":"delivered","from":data.from, "to":data.to, "subject":data.subject});
                console.log({"status":"delivered","from":data.from, "to":data.to, "subject":data.subject});
            }
    });
};

module.exports = mailgunSend;