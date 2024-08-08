const nodemailer = require('nodemailer');
const fs = require('fs');

const credentialsData = JSON.parse(fs.readFileSync('credentials.json').toString());
const gmailData = JSON.parse(fs.readFileSync('data.json').toString());


// Function to send the email
const main = async function () {
  

  // Create a transporter object using Gmail service
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: credentialsData.userGmail, // Senders Gmail
          pass: credentialsData.userPass, // Use the App Password here if 2FA is enabled
      },
  });
  
  // Set up email data
  let mailOptions = {
      from: credentialsData.userGmail, // sender address
      to: gmailData.receiverGmail, // list of receivers
      subject: gmailData.subject || 'No Subject', // Subject line
      text: 'This app is made by Pratiyank', // plain text body
      html: `<p>${gmailData.body}</p>`, // html body
  };

  // Send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

module.exports = {
    main
};