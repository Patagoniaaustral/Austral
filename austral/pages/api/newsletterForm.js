// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer"
const mail =process.env.EMAIL;
const pass = process.env.EMAIL_PASS;



const handlerNewsletter= async(req, res) => {
  try {
 
    const {email, router} = req.body
    
    const transporter = nodemailer.createTransport({
         host : "wo48.wiroos.host",
         port: 465,
         secure: true,
         auth: {
             user: mail,
             pass,
         }
     }) 


       if(!email){
         return res.status(403).json({message: "Need to write a email"})
       }
    
       
    let html = "";
    let subject = "";

    if (router === "es") {
      html = `<body style="font-family: 'Fira Sans', sans-serif; font-size: 1.2rem; margin: 0; padding: 0;"> 
      <img src="https://res.cloudinary.com/de74ziogy/image/upload/v1675017816/logoNavBar_osyjwg.png"  width="200px" height="auto" alt="austral logo"/>   
      <h1  style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >¡Bienvenido a nuestro Newsletter!</h1>
          <div style="width: 70%; margin:0 auto; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
              <p>Hola,</p>
              <p>Gracias por suscribirte a nuestro newsletter.</p>
              <p>Pronto te enviaremos noticias, consejos y promociones exclusivas. Te mantendremos al día con las últimas novedades de Autral.</p>
              <p>No dudes en ponerte en contacto con nosotros si tienes alguna pregunta o sugerencia. </p>
              
              <p style="margin-top: 2rem; font-style: italic;">Atentamente,</p>
              <p style="font-style: italic;"> Equipo de Austral.</p>
              </div>
      
      </body>
      `;
      subject = `Hola, gracias por suscribirte!`;
    } else {
      html = 
      `
      <body style="font-family: 'Fira Sans', sans-serif; font-size: 1.2rem; margin: 0; padding: 0;">
      <img src="https://res.cloudinary.com/de74ziogy/image/upload/v1675017816/logoNavBar_osyjwg.png"  width="200px" height="auto" alt="austral logo"/>
      <h1  style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >Welcome to our Newsletter!</h1>
      <div style="width: 70%; margin:0 auto; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
      <p>Hello,</p>
      <p>Thank you for subscribing to our newsletter.</p>
      <p>Soon we will send you news, tips and exclusive promotions. We will keep you up to date with the latest news from Austral.</p>
      <p>Do not hesitate to contact us if you have any questions or suggestions.</p>
      <p style="margin-top: 2rem; font-style: italic;">Yours sincerely,</p>
      <p style="font-style: italic;"> Austral Team.</p>
      </div>
      </body>
      `;
      subject = "Hi, thanks for subscribing!";
    }




       const mailFromAustral = {
        from: mail,  
        to: `${email}`,
        subject : subject,
        html : html
      }
  
  
      const mailFromUser = {
        from: `${email}`,
        to: mail,
        subject : `Newsletter de Austral/Nvo Suscriptor: ${email}`,
        html : `
        <body>
        <img src="https://res.cloudinary.com/de74ziogy/image/upload/v1675017816/logoNavBar_osyjwg.png" display="flex" justify-content="flex-end" width="200px" height="auto" alt="austral logo"/>
        <h1  style="text-align: center; font-size: 2rem; font-weight: 600; margin-top: 2rem; color: #DD3131;" >Tienes un nuevo suscriptor! </h1>
        <div style="width: 70%; margin: 0 auto; padding: 3em 4em;  border-radius: 3em; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);  background-color: #F5F5F5;">
        <p>Email de tu nuevo suscriptor para agregar a tu Newsletter: </br>
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
