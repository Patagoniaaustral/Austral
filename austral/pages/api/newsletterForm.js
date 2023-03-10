// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer"
const mail =process.env.EMAIL;
const pass = process.env.EMAIL_PASS;



const handlerNewsletter= async(req, res) => {
  try {
 
    const {email} = req.body
    
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

       if( !email){
         return res.status(403).json({message: "Need to write a email"})
       }
    
    await transporter.sendMail({
      from: mail, //TESTEAR!
      to:`${email}`,
      subject : `Newsletter susbribe from ${email}`,
      html : `<p>Hi!Welcome to Austral Newsletter! Soon we will contact you. Thanks!</p><br>`
    })

    console.log("Email send")
    return res.status(200).json(req.body)
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({message: error.message})
  }
}


export default handlerNewsletter;
