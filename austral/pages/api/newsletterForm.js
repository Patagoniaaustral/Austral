// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer"
const mail =process.env.EMAIL;
const pass = process.env.EMAIL_PASS;



const handler= async(req, res) => {
  try {
    const data = req.body;
    
    const transporter = nodemailer.createTransport({
         host : "smtp.gmail.com",
         port: 465,
         secure: true,
         // service: "gmail",
         auth: {
             user: mail,
             pass,
         }
     }) 

       if( !data.email){
         return res.status(403).json({message: "Need to write a email"})
       }
    
    await transporter.sendMail({
      from: `${data.email}`,
      to:mail,
      subject : `Newsletter susbribe from  ${data.email}`,
      html : `<p>Hi! You have a new suscriptor from ${data.email}</p><br>`
    })

    console.log("Email send")
    return res.status(200).json(req.body)
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({message: error.message})
  }
}


export default handler;
