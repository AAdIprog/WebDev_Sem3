const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'aadishah132@gmail.com', 
      pass: 'mbhr ayfp fzbk ujlq', 
    },
  });

  const mailOptions = {
    from: 'aadishah132@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };