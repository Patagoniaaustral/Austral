import React, {useState} from 'react'
import { useRouter } from "next/router";
import swal from 'sweetalert';
import Link from "next/link"
import Image from "next/image"
import { IconContext } from "react-icons";
import {BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {FaFacebookF} from "react-icons/fa";
import ContactHero from "../../public/assets/hero/Persona hablando por smartphone, Península San Pedro, Bariloche.webp"
import  validate  from '../controllers/contactValidate';
import sendDataForm from '../controllers/sendDataForm';
import contEs from "../../public/locale/ES/contact.json"
import contEn from "../../public/locale/EN/contact.json"
import styles from "../../styles/Contact.module.css"

function Contact() {
  const router = useRouter();
  const t = router.locale === "es" ? contEs : contEn;

  const dataInput={
    lastName: "",
    phone: "",
    email : "",
    message: "",
  }

  

  const [input, setInput]= useState(dataInput)
  const [error, setError] = useState(dataInput)
  
  const handleChange = ({target})=>{
    const {name, value} = target;
    setInput({...input, [name]: value});
    setError(validate({...input, [name]:value}))
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Object.values(error).length !== 0){
      swal("Algunos campos estan incompletos. Por favor, completelos")
    }

    const data = {
      input,
      router : router.locale
    }
    
    try {
     await sendDataForm(data)
     setInput(dataInput);
     swal("Su mensaje fue enviado con éxito.",{
      buttons: false,
      timer: 1000,
    });
   } catch (error) {
    swal("Error al enviar el mensaje. Intente nuevamente.")
   }
  }

  return (
    <div className={styles.main}>
         <div className={styles.header}>
        <h1 className={styles.header__title}>{t.contact}</h1>
        <Image src={ContactHero} className={styles.header__img} alt="niño asomandose del auto" width={1300} height={400} priority/>
      </div>

    <div className={styles.contact__container}>
      
      <div className={styles.contact__info}>
        <h2 className={styles.contact__info__title}>{t.write}</h2>
        <p className={styles.contact__info__text}>{t.text}</p>

        <div className={styles.contact__info__links}>
        <IconContext.Provider value={{ color: "black", size: "1.5em" }}> 
          <Link   href="https://wa.me/5492944242615" target={"_blank"}>
              <BsWhatsapp />
             <p>+549 294 424 2615</p>
          </Link>

          <Link className={styles.info_link} href="mailto:info@australrentacar.ar">
            <FiMail className={styles.info_link_ico} />
            <p> info@australrentacar.ar</p>
          </Link>

          <Link  href="https://www.instagram.com/australrentacar" target={"_blank"}>
                <BsInstagram  />
                <p>australrentacar.ar</p>
          </Link>

          <Link  href="https://www.facebook.com/australrentacar" target={"_blank"}>
                <FaFacebookF/>
                <p>australrentacar.ar</p>
          </Link>
          </IconContext.Provider>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.contact__form} autoComplete="on"  >
        <label><span>{t.lastname}</span>
        <input type="text" name="lastName"  aria-label="required" value={input.lastName} onChange={handleChange} required/>
        {error.lastName && ( <p>{error.lastName}</p>)}
        </label>

        <label><span>{t.phone}</span>
        <input type="text" name="phone"  aria-label="required" value={input.phone} onChange={handleChange} required/>
        {error.phone && ( <p>{error.phone}</p>)}
        </label>

        <label><span>{t.email}</span>
        <input type="email" name="email"  aria-label="required" value={input.email} onChange={handleChange} required/>
        {error.email && ( <p>{error.email}</p>)}
        </label>

        <label><span>{t.message}</span>
        <textarea name="message"  value={input.message} onChange={handleChange} ></textarea>
        </label>

        <button type ="submit"  disabled={Object.values(error).length !== 0}>{t.send}</button>
      </form>
    </div>
    </div>
  )
}

export default Contact