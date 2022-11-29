const axios = require("axios")

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
       //const data = {subject:subject, content:content, to:to}
    const data = {
        service_id: process.env.EMAIL_SERVICE_ID,
        template_id: process.env.EMAIL_TEMPLATE_ID,
        user_id: process.env.EMAIL_PUBLIC_KEY,
        template_params: {subject:subject, content:content, to:to}
    };
    const resp = axios({
        method: 'post',
        url: 'https://api.emailjs.com/api/v1.0/email/send',
        data: data
      });
      console.log("axios", resp)
    /*$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            alert('Your mail is sent!');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });*/
}

const runEmail = async function(app){
    //emailjs.init(process.env.EMAIL_PUBLIC_KEY)
    app.get("/test", async (req, res, next) => {
        await sendEmail("martin.sainos.demian@gmail.com","test",req.query.text)
        res.json({
            msg:"email"
        });
    });
}

module.exports.runEmail = runEmail;
module.exports.sendEmail = sendEmail;
