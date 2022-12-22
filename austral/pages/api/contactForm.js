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

       if(!data.lastName || !data.phone || !data.email || !data.message){
         return res.status(403).json({message: "Bad request.Missing data fields."})
       }

    const mailOptions = {
      from:mail,  //TESTEAR!
      to: `${data.email}`,
      subject : `Contact form submission from  ${data.lastName.toUpperCase()}`,
      html : `<p>Hi! You have a new contact form sumissions from ${data.lastName.toUpperCase()}</p><br>
      <p>If you need to contact, the phone number of this contact is ${data.phone}</p><br>
      <p> email: ${data.email}</p><br>
      <p>Message:<br> ${data.message}</p><br>` // Se puede hacer mas personalizado
    }

    await transporter.sendMail(mailOptions,function (error,info) {
     if(error){
      console.log(error)
     } else {
      console.log("Email sent : " + info.response)
      return res.status(200).json({message: info.response})
     }
    })

  
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({message: error.message || error})
  }
}


export default handler;
