import React from 'react'
import Link from "next/link"
import { IconContext } from "react-icons";
import {BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <h1>CONTACTO</h1>
      <div>
        <h2>ESCRIBINOS</h2>
        <p>Si tienes alguna duda, comunicate con nosotros telefonicamente o deja tu mesnaje en este apartado para que nos comuniquemos a la brevedad.</p>
        <IconContext.Provider value={{ color: "black", size: "1.5em" }}> 
          <Link  href="https://api.whatsapp.com/send/?phone=549 294 424 2615&text&type=phone_number&app_absent=0" target={"_blank"}>
              <BsWhatsapp />
             <p>+549 294 424 2615</p>
          </Link>
          <SiGmail />
        <p>
          <a href="mailto:info@australrentacar.ar">
            info@australrentacar.ar
          </a>
        </p>
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
        <label>Apellido</label>
        <input type="text"/>

        <label>Telefono</label>
        <input type="text"/>

        <label>E-mail</label>
        <input type="text"/>

        <label>Mensaje</label>
        <textarea></textarea>
      </div>
    </>
  )
}

export default Contact