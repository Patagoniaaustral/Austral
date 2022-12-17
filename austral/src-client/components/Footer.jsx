import React from 'react'
import styles from "../../styles/Footer.module.css"
import { IconContext } from "react-icons";
import {BsInstagram, BsFacebook } from "react-icons/bs";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <p>Soy el footer</p>

      <div>
        <div>
          <p>LOGO</p>
          <IconContext.Provider value={{ color: "white", size: "1.5em" }}> 
          <Link href="https://www.facebook.com/australrentacar" target={"_blank"}>
                <BsFacebook />
                <p>australrentacar.ar</p>
          </Link>
          <Link href="https://www.instagram.com/australrentacar" target={"_blank"}>
                <BsInstagram />
                <p>australrentacar.ar</p>
          </Link>
          </IconContext.Provider>
        </div>

        <div>
          <h2>ATENCION</h2>
          <p>Lunes a Viernes 08hs a 22hs</p>
          <p>Sábados y Domingos 09hs a 19hs</p>
        </div>

        <div>
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

      <div>
        <p>Recibi todas nuestras <br/>promociones</p>
        <input type="text" placeholder='Ingresa tu mail'/>
        <button>SUSCRIBIR</button>
      </div>

      <div>
        <p>Austral rent a car &copy; 2022-Powered by Cipbyte</p>
      </div>
      
    </div>
  )
}

export default Footer