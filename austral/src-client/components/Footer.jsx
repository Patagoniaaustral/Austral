import React, {useState} from 'react'
import axios from "axios";
import styles from "../../styles/Footer.module.css"
import { IconContext } from "react-icons";
import {BsInstagram, BsFacebook } from "react-icons/bs";
import { useRouter } from "next/router";
import footEs from "../../public/locale/ES/footer.json"
import footEn from "../../public/locale/EN/footer.json"
import Link from 'next/link'

const Footer = () => {

const [email, setEmail] = useState("")

const router = useRouter();
const t = router.locale === "es" ? footEs : footEn;

const handleSubmit = async(e) => {
  e.preventDefault();
  if(!email){
    alert("Email is required")
  }
  try {
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
    <footer className={styles.footer__container}>

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
          <h2>{t.atention}</h2>
          <p>{t.days1}</p>
          <p>{t.days2}</p>
        </div>

        <div >
          <h2>{t.contact}</h2>
          <p><a href="mailto:info@australrentacar.ar">
                info@australrentacar.ar
              </a>
          </p>
          <Link  href="https://api.whatsapp.com/send/?phone=549 294 424 2615&text&type=phone_number&app_absent=0" target={"_blank"}>
             <p>+549 294 424 2615</p>
          </Link>
        </div>

        <div >
          <h2>{t.service}</h2>
            <Link href="/fleet">
              <p>{t.fleet}</p>
            </Link>   
            <Link href="/booking">
              <p>{t.booking}</p>
            </Link>  
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.footer__second_row}>
        <p>{t.newsp}</p>
        <input className={styles.news} type="email" name ="email" value={email} onChange={({target})=> setEmail(target.value)} placeholder={t.newsplace} required/>
        <button className={styles.news__btn} type="submit">{t.newsbtn}</button>
      </form>

      <div className={styles.footer__third_row}>
        <p>Austral rent a car &copy; 2022-{t.copy} Cipbyte</p>
      </div>
      
    </footer>
  )
}

export default Footer