const nodemailer = require('nodemailer');

module.exports = async function (email, emailContent) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    console.log(emailContent);

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        name: "ChangeCentral",
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
        }, 
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"ChangeCentral" <changecentral@smtp.ethereal.email>', // sender address
        to: emailContent.to, // list of receivers
        subject: emailContent.subject, // Subject line
        text: emailContent.text, // plain text body
        html: emailContent.html, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return info;
}