var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ebuaydic2@gmail.com',
    pass: 'imha mrff guqf ihpd'
  }
});

var mailOptions = {
  from: 'ebuaydic2@gmail.com',
  to: 'bitergamesekip@gmail.com',
  subject: 'Mesaj nedemesi',
  text: 'Bakalım nasıl mesaj gönderiyor?'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});