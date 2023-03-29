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
         service: "gmail",
         auth: {
             user: mail,
             pass,
         }
     }) 

    if(!data.input.lastName || !data.input.phone || !data.input.email || !data.router){
      return res.status(403).json({message: "Bad request.Missing data fields."})
    }

    let html = "";
    let subject = "";

    if (data.router === "es") {
      html = `<body style="font-family: 'Fira Sans', sans-serif; font-size: 1.2rem; margin: 0; padding: 0; background-image : url(https://drive.google.com/file/d/1DZsDBTRz21kFf9sOA0i78Y3tII-J9haB/view?usp=sharing)"; background-size: 100%; background-repeat: repeat; background-attachment: fixed;">
          <img src="https://drive.google.com/file/d/1p8O-4EwKpJafZFiqJZea2FdQxHWrzrQA/view?usp=sharing"  alt="austral logo"/>
          <h1  style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >¡Gracias por contactarnos!</h1>
          <div style="width: 90%; margin: 2em 0 6em; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
              <p>Hola ${data.input.lastName.toUpperCase()},</p>
              <p>Nos complace que esté interesado en nuestros servicios.</p>
              <p>Hemos recibido su solicitud y estamos revisando su consulta, en breve nos pondremos en contacto ofreciendo una respuesta.</p>
              <p>Gracias por elegirnos. </p>
              <p style="margin-top: 2rem; font-style: italic;">Atentamente,</p>
              <p style="font-style: italic;"> Equipo de Austral.</p>
              </div>
          
      </body>
      `;
      subject = `Hola ${data.input.lastName.toUpperCase()}, pronto nos contactaremos!`
    } else {
      html = 
      `
      <body style="font-family: 'Fira Sans', sans-serif; font-size: 1.2rem; margin: 0; padding: 0; background-image : url(https://drive.google.com/file/d/1DZsDBTRz21kFf9sOA0i78Y3tII-J9haB/view?usp=sharing)"; background-size: 100%; background-repeat: repeat; background-attachment: fixed;">
          <img src="https://drive.google.com/file/d/1p8O-4EwKpJafZFiqJZea2FdQxHWrzrQA/view?usp=sharing"  alt="austral logo"/>
          <h1  style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >Thanks for contact us!</h1>
          <div style="width: 90%; margin: 2em 0 6em; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
              <p>Hello ${data.input.lastName.toUpperCase()},</p>
              <p>We are pleased that you are interested in our services.</p>
              <p>We have received your request and are reviewing your inquiry, we will contact you shortly with a response.</p>
              <p>Thanks for picking us. </p>

              <p style="margin-top: 2rem; font-style: italic;">Yours sincerely,</p>
              <p style="font-style: italic;"> Austral Team.</p>
             
              </div>
          
      </body>
      `;
      subject = `Hi ${data.input.lastName.toUpperCase()}, soon we will contact you!`;
    }

    const mailFromAustral = {
      from: mail,  
      to: `${data.input.email}`,
      subject : subject,
      html : html
    }


    const mailFromUser = {
      from: `${data.input.email}`,
      to: mail,
      subject : `Contacto desde Austral/Mensaje de ${data.input.lastName.toUpperCase()}`,
      html : `
      <body style="background-image:url(https://drive.google.com/file/d/1DZsDBTRz21kFf9sOA0i78Y3tII-J9haB/view?usp=sharing)"; background-size: 100%; background-repeat: repeat; background-attachment: fixed;>
      <h1  style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >Tienes un nuevo mensaje de ${data.input.lastName.toUpperCase()}</h1>
      <div style="width: 90%; margin: 2em 0 6em; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
      <p>Los datos del Usuario para que puedas ponerte en contacto son:</p>
      <p>Teléfono: ${data.input.phone}</p>
      <p>Email: ${data.input.email}</p>
      </br>

      <p style="margin: 1rem auto; width: 70%; line-height:1.5rem;"><strong>MENSAJE:<br/> ${data.input.message}</strong></p>
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
      console.log(error);
      return res.status(400).json({message: error.message || error});
    }
    
}


export default handler;
