// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer"
const email =process.env.EMAIL;
const pass = process.env.EMAIL_PASS;


const handler= async(req, res) => {
  
  const data = req.body;
  console.log(data, "DATA")

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
  
 const mailOptions = {
      from: email,
      to:data.email,
      subject : "Form de contacto de Austral",
      text: "Test send email from localoast to gamil",

  }
  
  try {
    
      if(req.method === "POST"){
        if(!data.lastName, !data.phone, !data.email, !data.message){
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
