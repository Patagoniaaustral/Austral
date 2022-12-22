import React, {useState} from 'react'
import axios from "axios";
import styles from "../../styles/Footer.module.css"
import { IconContext } from "react-icons";
import {BsInstagram, BsFacebook } from "react-icons/bs";
import Link from 'next/link'

const Footer = () => {

const [email, setEmail] = useState("")

const handleSubmit = async(e) => {
  e.preventDefault();
  if(!email){
    alert("Email is required")
  }
  try {
    console.log(email, "email del front")
    const mail = {
      email,
    }
    await axios.post("/api/newsletterForm", mail)
    alert("Suscribe success")
    setEmail("");
  } catch (error) {
      console.log(error)
      return error;
  }
}

  return (
    <div className={styles.footer__container}>

      <div className={styles.footer__first_row}>

        <div>
          <p>LOGO</p>
          <IconContext.Provider value={{ color: "white", size: "1.5em" }}> 
          <Link className={styles.footer_link} href="https://www.facebook.com/australrentacar" target={"_blank"}>
                <BsFacebook className={styles.footer_link_ico}/>
                <p>australrentacar.ar</p>
          </Link>
          <Link className={styles.footer_link} href="https://www.instagram.com/australrentacar" target={"_blank"}>
                <BsInstagram className={styles.footer_link_ico} />
                <p>australrentacar.ar</p>
          </Link>
          </IconContext.Provider>
        </div>

        <div>
          <h2>ATENCION</h2>
          <p>Lunes a Viernes 08hs a 22hs</p>
          <p>Sábados y Domingos 09hs a 19hs</p>
        </div>

        <div >
          <h2>CONTACTO</h2>
          <p><a href="mailto:info@australrentacar.ar">
                info@australrentacar.ar
              </a>
          </p>
          <Link  href="https://api.whatsapp.com/send/?phone=549 294 424 2615&text&type=phone_number&app_absent=0" target={"_blank"}>
             <p>+549 294 424 2615</p>
          </Link>
        </div>

        <div >
          <h2>SERVICIO</h2>
            <p>Términos y Condiciones</p>
            <Link href="/fleet">
              <p>Flota</p>
            </Link>   
            <Link href="/booking">
              <p>Reservas</p>
            </Link>  
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.footer__second_row}>
        <p>Recibi todas nuestras <br/>promociones</p>
        <input type="email" name ="email" value={email} onChange={({target})=> setEmail(target.value)} placeholder='Ingresa tu mail' required/>
        <button type="submit">SUSCRIBIR</button>
      </form>

      <div className={styles.footer__third_row}>
        <p>Austral rent a car &copy; 2022-Powered by Cipbyte</p>
      </div>
      
    </div>
  )
}

export default Footer