// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer"
const email =process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
     host : "smtp.gmail.com",
     port: 465,
     secure: true,
     // service: "gmail",
     auth: {
         user: email,
         pass,
     }
 }) 
 
 
 const handler= async(req, res) => {
   try {
     const {mail, message, phone, lastName} = req.body;
     console.log(data, "DATA")  
     
     const mailOptions = {
          from: email,
          to:mail,
          subject : "Form de contacto de Austral",
          text: "Test send email from localoast to gamil", 
      }
    
      if(req.method === "POST"){
        if(!lastName, !phone, !mail, !message){
          return res.status(400).json({message: "Bad request"})
        }
      }
    await transporter.sendMail({
      ...mailOptions,
      text: "Test send email from localoast to gmail",
      html : "<h1>TEXT TITLE</h1><p>bla bla bla bla </p>"

    })
    console.log("Email enviado")
    return res.status(200).json(req.body)
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({message: error.message})
  }
  
}


export default handler;
