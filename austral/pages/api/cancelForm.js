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

    if(!data.lastName || !data.phone || !data.email || !data.message){
      return res.status(403).json({message: "Bad request.Missing data fields."})
    }

    const mailFromAustral = {
      from: mail,  
      to: `${data.email}`,
      subject : `Solicitud de cancelacion recibida`,
      html : 
      `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email From Austral</title>
    </head>
    <body style="font-family: 'Fira Sans', sans-serif; font-size: 1.2rem; margin: 0; padding: 0; background-image : url(https://drive.google.com/file/d/1DZsDBTRz21kFf9sOA0i78Y3tII-J9haB/view?usp=sharing)"; background-size: 100%; background-repeat: repeat; background-attachment: fixed;">
    <img src="https://drive.google.com/file/d/1p8O-4EwKpJafZFiqJZea2FdQxHWrzrQA/view?usp=sharing"  alt="austral logo"/>
        <h1  style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >¡Gracias por contactarnos!</h1>
        <div style="width: 90%; margin: 2em 0 6em; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
            <p>Hola ${data.lastName.toUpperCase()},</p>
            <p>Gracias por contactarnos y por hacernos saber acerca de tu solicitud de cancelación del servicio. Nos tomamos muy en serio tus comentarios y estamos trabajando diligentemente para procesar tu solicitud lo antes posible.</p>
            <p>Por favor, tenga en cuenta que el proceso de cancelación puede tardar 24hs en completarse. Una vez que hayamos procesado tu solicitud, te notificaremos por correo electrónico o por teléfono.</p>
            <p>Si necesita asistencia adicional o tiene alguna pregunta, no dude en llamarnos directamente al número de teléfono <a href="https://api.whatsapp.com/send/?phone=549 294 424 2615&text&type=phone_number&app_absent=0" target="_blank">+549 294 424 2615</a></p>
            <p> Gracias de nuevo por tu confianza en nosotros.</p>
            
            <p style="margin-top: 2rem; font-style: italic;">Atentamente,</p>
            <p style="font-style: italic;"> Equipo de Austral.</p>
            </div>
        
    </body>
    </html>
    `
    }

    const mailFromUser = {
      from: `${data.email}`,
      to: mail,
      subject : `Solicitud de Cancelación de ${data.lastName.toUpperCase()}`,
      html : `
      <body style="background-image : url(https://drive.google.com/file/d/1DZsDBTRz21kFf9sOA0i78Y3tII-J9haB/view?usp=sharing)"; background-size: 100%; background-repeat: repeat; background-attachment: fixed;>
      <h1 style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >Tienes un nuevo mensaje de ${data.lastName.toUpperCase()}</h1> 
      <div style="width: 90%; margin: 2em 0 6em; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
      <p>Los datos del Usuario para que puedas ponerte en contacto son:</p>
      <p>Teléfono: ${data.phone}</p>
      <p>Email: ${data.email}</p>
      </br>

      <p style="margin: 1rem auto; width: 70%; line-height:1.5rem;"><strong>MENSAJE:<br/> ${data.message}</strong></p>
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