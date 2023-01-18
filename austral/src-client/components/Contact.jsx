import React, {useState} from 'react'
import { useRouter } from "next/router";
import Link from "next/link"
import { IconContext } from "react-icons";
import {BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {FaFacebookF} from "react-icons/fa";
import  validate  from '../controllers/contactValidate';
import sendDataForm from '../controllers/sendDataForm';
import contEs from "../../public/locale/ES/contact.json"
import contEn from "../../public/locale/EN/contact.json"
import styles from "../../styles/Contact.module.css"

function Contact() {

  const dataInput={
    lastName: "",
    phone: "",
    email : "",
    message: "",
    }


  const [input, setInput]= useState(dataInput)
  const [error, setError] = useState(dataInput)
  const router = useRouter();
  const t = router.locale === "es" ? contEs : contEn;

  const handleChange = ({target})=>{
    const {name, value} = target;
    setInput({...input, [name]: value});
    setError(validate({...input, [name]:value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Object.values(error).length !== 0){
      alert("Some fiels are empthy. Please complete.")
    }
    try {
     await sendDataForm(input)
     setInput(dataInput);
     alert("Message send succesfully!")
   } catch (error) {
    alert("Error in send message. Try again.")
   }
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.contact__title}>{t.contact}</h1>
    
    <div className={styles.general__container}>
      
      <div className={styles.info__container}>
        <h2>{t.write}</h2>
        <p>{t.text}</p>

        <div>
        <IconContext.Provider value={{ color: "black", size: "1.5em" }}> 
          <Link   href="https://api.whatsapp.com/send/?phone=549 294 424 2615&text&type=phone_number&app_absent=0" target={"_blank"}>
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

      <form onSubmit={handleSubmit} className={styles.form__container} autoComplete="on"  >
        <label>{t.lastname}</label>
        <input type="text" name="lastName" value={input.lastName} onChange={handleChange} required/>
        {error.lastName && ( <p>{error.lastName}</p>)}

        <label>{t.phone}</label>
        <input type="text" name="phone" value={input.phone} onChange={handleChange} required/>
        {error.phone && ( <p>{error.phone}</p>)}

        <label>{t.email}</label>
        <input type="email" name="email" value={input.email} onChange={handleChange} required/>
        {error.email && ( <p>{error.email}</p>)}

        <label>{t.message}</label>
        <textarea name="message" value={input.message}  onChange={handleChange} required></textarea>
        {error.message && ( <p>{error.message}</p>)}

        <button type ="submit"  disabled={Object.values(error).length !== 0}>{t.send}</button>
      </form>
    </div>
    </div>
  )
}

export default Contact