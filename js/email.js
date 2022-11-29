const emailjs = require( "@emailjs/browser")

const sendEmail = async function(to, subject, content){
    console.log("send email",to,subject,content)
    /*
    await emailjs.send(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, {
        subject:subject, content:content, to:to})
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
        */
    emailjs.sendForm(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, {
        subject:subject, content:content, to:to})
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}

const runEmail = async function(app){
    emailjs.init(process.env.EMAIL_PUBLIC_KEY)
    app.get("/test", async (req, res, next) => {
        await sendEmail("martin.sainos.demian@gmail.com","test",req.query.text)
        res.json({
            msg:"email"
        });
    });
}

module.exports.runEmail = runEmail;
module.exports.sendEmail = sendEmail;
