const express = require('express');
const app = express();
// for dotenv 
const dotenv = require('dotenv')
const dotenvb = require('dotenv').config()

// nodemailer
const nodemailer = require('nodemailer')
// cors
const cors = require('cors')
// body-parser
const bodyParser =require('body-parser')
// middlewares

app.use(bodyParser.urlencoded({extended:"true"}))
app.use(bodyParser.json())
app.use(cors())

app.post("/api/sendmail",(req,res)=>{
 let {data}=req.body
 const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port:465,
    auth: {
      user: 'dammydee40@gmail.com',
      pass: '#Dammy2580'
    }
  }));
  
  const mailOptions = {
    from: data.email,
    to: 'dammydee40@gmail.com',
    subject: `message from ${data.name}`,
   html:`
   <h3>Informations</h3>
   <ol>
    <li>name:${data.name}</li>
   
    <li>name:${data.email}</li>
   </ol>
    <h3>Message</h3>
    <p> ${data.message}</p>
   `
   
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
    
  });  
//  const transport= nodemailer.createTransport({
//     host:process.env.Host,
//     port:process.env.Port,
//     auth:{
//         user:process.env.User,
//         pass:process.env.Password
//     }
//     await transport.sendMail({
//         from:
//     })
 

})

app.listen(process.env.PORT,()=>{
    console.log(`server running on ${process.env.PORT}`)
})