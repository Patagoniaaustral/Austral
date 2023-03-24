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
         service: "gmail",
         auth: {
             user: mail,
             pass,
         }
     }) 


       if(!email){
         return res.status(403).json({message: "Need to write a email"})
       }
    
       const mailFromAustral = {
        from: mail,  
        to: `${email}`,
        subject : `Hola, gracias por suscribirte!`,
        html : 
        `
      <body style="font-family: 'Fira Sans', sans-serif; font-size: 1.2rem; margin: 0; padding: 0; background-image : url(https://drive.google.com/file/d/1DZsDBTRz21kFf9sOA0i78Y3tII-J9haB/view?usp=sharing)"; background-size: 100%; background-repeat: repeat; background-attachment: fixed;">
          <img src="https://drive.google.com/file/d/1p8O-4EwKpJafZFiqJZea2FdQxHWrzrQA/view?usp=sharing"  alt="austral logo"/>
          <h1  style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >¡Bienvenido a nuestro Newsletter!</h1>
          <div style="width: 90%; margin: 2em 0 6em; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
              <p>Hola,</p>
              <p>Gracias por suscribirte a nuestro boletín. Estamos encantados de que te hayas unido a nuestra comunidad.</p>
              <p>Pronto te enviaremos noticias, consejos y promociones exclusivas. Te mantendremos al día con las últimas novedades de Autral.</p>
              <p>No dudes en ponerte en contacto con nosotros si tienes alguna pregunta o sugerencia. Valoramos mucho tu opinión y estaremos encantados de ayudarte en todo lo que necesites.</p>
              <p>Gracias de nuevo por suscribirte a nuestro boletín informativo. ¡Esperamos poder ofrecerte contenido de calidad y útil en el futuro!</p>
              
              <p style="margin-top: 2rem; font-style: italic;">Atentamente,</p>
              <p style="font-style: italic;"> Equipo de Austral.</p>
              </div>
          
      </body>
      </html>
      `
      }
  
  
      const mailFromUser = {
        from: `${email}`,
        to: mail,
        subject : `Newsletter de Austral/Nvo Suscriptor: ${email}`,
        html : `
        <body style="background-image:url(https://drive.google.com/file/d/1DZsDBTRz21kFf9sOA0i78Y3tII-J9haB/view?usp=sharing)"; background-size: 100%; background-repeat: repeat; background-attachment: fixed;>
        <h1  style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >Tienes un nuevo suscriptor! </h1>
        <div style="width: 90%; margin: 2em 0 6em; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
        <p>Email de tu nuevo suscriptor para que puedas agregarlo a tu lista: </br>
        ${email}</p>
        </br>
        </div>
        </body>
        `
      }
  
        const mailAustralSent = await transporter.sendMail(mailFromAustral);
        console.log("Email sent from Austral: " + mailAustralSent.response);
      
        const mailUserSent = await transporter.sendMail(mailFromUser);
        console.log("Email sent from User: " + mailUserSent.response);
      
        return res.status(200).json({message: "Emails sent successfully"});
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({message: error.message})
  }
}


export default handlerNewsletter;
