//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
// create a new Express application instance
const app = express();
//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'afyildiz@gmail.com',
      pass: 'zozekfpbbxghpwcy'
    }
  });

  const mailOptions = {
    from: `${email}`,
    to: `afyildiz@gmail.com`,
    subject: 'İletişim Formu',
    text: `
      İsim: ${name}
      E-posta: ${email}
      -----------------------------------------
      ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('E-posta gönderimi başarısız:', error);
      res.sendStatus(500);
    } else {
      console.log('E-posta gönderildi:', info.messageId);
      res.json({ success: true });
    }
  });
  
});

app.listen(3000, () => {
  console.log('Sunucu çalışıyor: http://localhost:3000');
});













// const app = express();
// app.use(express.json());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", 
//                "http://localhost:4200");
//     res.header("Access-Control-Allow-Headers", 
//                "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.post('/api/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     auth: {
//       user: 'afyildiz@gmail.com',
//       pass: 'zozekfpbbxghpwcy'
//     }
//   });

//   const mailOptions = {
//     from: `${email}`,
//     to: `afyildiz@gmail.com`,
//     subject: 'İletişim Formu',
//     text: `
//       İsim: ${name}
//       E-posta: ${email}
//       -----------------------------------------
//       ${message}
//     `
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('E-posta gönderimi başarısız:', error);
//       res.sendStatus(500);
//     } else {
//       console.log('E-posta gönderildi:', info.messageId);
//       res.json({ success: true });
//     }
//   });
  
// });

// app.listen(3000, () => {
//   console.log('Sunucu çalışıyor: http://localhost:3000');
// });