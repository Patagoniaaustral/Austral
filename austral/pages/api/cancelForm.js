import nodemailer from "nodemailer"

const mail =process.env.EMAIL;
const pass = process.env.EMAIL_PASS;



const cancelFormHandler= async(req, res) => {
  try {
    const data = req.body;
    
    const transporter = nodemailer.createTransport({
      host: 'mail.patagoniaaustralrentacar.com.ar',
      port: 465 || 26,
      secure: true,
      auth:{
        user: mail,
        pass: pass
      }
     }) 

    if(!data.input.lastName || !data.input.phone || !data.input.email || !data.router){
      return res.status(403).json({message: "Bad request.Missing data fields."})
    }
    let html = "";
    let subject = "";

    if (data.router === "es") {
      html =  `
      <body style="font-family: 'Fira Sans', sans-serif; font-size: 1.2rem; margin: 0; padding: 0;">
      <img src="https://res.cloudinary.com/de74ziogy/image/upload/v1675017816/logoNavBar_osyjwg.png"  width="200px" height="auto" alt="austral logo"/>   
      <h1  style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;"> Cancelación de Reserva </h1>
      <div style="width:70%; margin: 0 auto; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
          <p>Hola ${data.input.name.toUpperCase()},</p>
          <p>Gracias por contactarnos, hemos recibido su solicitud de cancelación de reserva.</p>
          <p>El proceso de cancelación puede tardar hasta 24hs en completarse. Una vez que hayamos procesado tu solicitud, te notificaremos por éste medio.</p>
          
          <p style="margin-top: 2rem; font-style: italic;">Atentamente,</p>
          <p style="font-style: italic;"> Equipo de Austral.</p>
          </div>
          
      </body>
      `;
      subject = `Solicitud de cancelacion recibida`;
    } else {
      html = 
      `
      <body style="font-family: 'Fira Sans', sans-serif; font-size: 1.2rem; margin: 0; padding: 0; ">
      <img src="https://res.cloudinary.com/de74ziogy/image/upload/v1675017816/logoNavBar_osyjwg.png"  width="200px" height="auto" alt="austral logo"/>   
          <h1 style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;">Booking Cancellation</h1>
          <div style="width: 70%; margin: 0 auto; padding: 3em 4em; border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); background-color: #F5F5F5;">
              <p>Hello ${data.input.name.toUpperCase()},</p>
              <p>Thank you for contacting us, we have received your reservation cancellation request.</p>
              <p>The cancellation process may take up to 24 hours to complete. Once we have processed your request, we will notify you through this medium.</p>
              <p style="margin-top: 2rem; font-style: italic;">Sincerely,</p>
              <p style="font-style: italic;"> Austral Team.</p>
              </div>
      </body>
      `;
      subject = `Cancellation request received`;
    }

    const mailFromAustral = {
      from: mail,  
      to: `${data.input.email}`,
      subject : subject,
      html : html,
     
    }

    const mailFromUser = {
      from: `${data.input.email}`,
      to: mail,
      subject : `Solicitud de Cancelación de ${data.input.lastName.toUpperCase()}`,
      html : `
      <body>
      <img src="https://res.cloudinary.com/de74ziogy/image/upload/v1675017816/logoNavBar_osyjwg.png"  width="200px" height="auto" alt="austral logo"/>   
      <h1 style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >Solicitud de cancelacion de  ${data.input.lastName.toUpperCase()}</h1> 
      <div style="width: 70%; margin: 0 auto; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
      <p>Los datos del Usuario ${data.input.name} ${data.iinput.lastName} para que puedas ponerte en contacto son:</p>
      <p>Teléfono: ${data.input.phone}</p>
      <p>Email: ${data.input.email}</p>
      <p> Código de Reserva : ${data.input.codeReservation}</p>
      <p style="line-height:1.5rem;"><strong>MENSAJE:<br/> ${data.input.message}</strong></p>
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


export default cancelFormHandler;