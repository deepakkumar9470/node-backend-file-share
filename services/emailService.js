const nodemailer = require('nodemailer');

function sendMail({from ,to, subject,text,html}){
    let transporter = nodemailer.createTransport({
        host : process.env.SMTP_HOST,
        port : process.env.SMTP_PORT,
        secure:  false,
        auth : {

            user : process.env.SMTP_USER,
            pass : process.env.SMTP_PASSWORD,
         }
    });

       // sending mails

        let info = transporter.sendMail({
            from : `dShare <${from}>`,
            to: to,
            subject : subject,
            text : text,
            html : html
        });
    
      
      
 
}





module.exports = sendMail;