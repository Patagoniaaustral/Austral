import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image';
//import LogoFooter from "../../public/assets/others/logoFooter.png"
import { IconContext } from "react-icons";
import {BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import { useRouter } from "next/router";
import footEs from "../../public/locale/ES/footer.json"
import footEn from "../../public/locale/EN/footer.json"
import styles from "../../styles/Footer.module.css"

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
          <Image src="https://res.cloudinary.com/de74ziogy/image/upload/f_auto,q_auto/v1675017818/logoFooter_m2otmm.png" alt="Logo de Austral Rental" width={200} height={60} />
          <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
            <Link href="https://www.instagram.com/australrentacar" target={"_blank"} aria-label="instagram">
              <BsInstagram className={styles.first_row_ico} />
              <p>australrentacar.ar</p>
            </Link>
            <Link href="https://www.facebook.com/australrentacar" target={"_blank"} aria-label="facebook">
              <FaFacebookF className={styles.first_row_ico}/>
              <p>australrentacar.ar</p>
            </Link>
          </IconContext.Provider>
        </div>
        <div>
          <h2>{t.atention}</h2>
          <p>{t.days1}</p>
          <p>{t.days2}</p>
        </div>
        <div>
          <h2>{t.contact}</h2>
            <Link href="mailto:info@australrentacar.ar"><p>info@australrentacar.ar</p></Link>
            <Link href="https://api.whatsapp.com/send/?phone=549 294 424 2615&text&type=phone_number&app_absent=0" target={"_blank"}><p>+549 294 424 2615</p></Link>
        </div>
        <div>
          <h2>{t.service}</h2>
            <Link href="/fleet" aria-label="services" ><p>{t.fleet}</p></Link>
            <Link href="https://www.patagoniaaustralrentacar.com.ar/reservar" aria-label='booking' ><p>{t.booking}</p></Link>
        </div>
      </div>


      <form onSubmit={handleSubmit} className={styles.footer__second_row}>
        <p>{t.newsp}</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder={t.newsplace}
          required
        />
        <button type="submit">{t.newsbtn}</button>
      </form>


      <p>Austral rent a car &copy; 2023 - {t.copy} Cipbyte</p>
    </footer>
  );
}

export default Footer




