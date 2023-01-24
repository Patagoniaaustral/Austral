import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image';
import LogoNavBar from "../../src-client/assets/logoNavBar.png"
import Es from "../../src-client/assets/lang-es.png"
import En from "../../src-client/assets/lang-en.png"
import navEs from "../../public/locale/ES/navbar.json"
import navEn from "../../public/locale/EN/navbar.json"
import styles from "../../styles/NavBar.module.css"


export const NavBar = () => {
  const router = useRouter();
  const t = router.locale === "es" ? navEs : navEn;
  const [lang, setLang] = useState(Es);
  const [isActive, setIsActive] = useState(false);
  
  const handleNavToggle = () => {
    setIsActive((current) => !current);
  };

  const handleChange = ({target})=> {  
    const {value} = target
    router.push(router.pathname, router.pathname, {
      locale : value
    })
    setLang(lang === Es ? En : Es);
  }

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };




  return (
    <header className={styles.nav__container} >
      
      <Link href="/"><Image className={styles.logo} src={LogoNavBar} alt="Logo Austral Rental" width={180} height={30} priority /></Link>
          
      <button onClick={handleNavToggle} className={isActive ? [styles.nav_toggle, styles.nav_open].join(" ") : styles.nav_toggle} aria-label="toggle navigation">
        <span className={isActive ? [styles.hamburger, styles.nav_open].join(" ") : styles.hamburger}></span>
      </button>

      <nav id="nav" className={isActive ? [styles.nav, styles.nav_open].join(" ") : [styles.nav, styles.nav_close].join(" ")}>
        <ul className={styles.nav__list}>
          <li>
            <Link href="/"  onClick={handleLinkClick} >
              <span>{t.home}</span> 
            </Link>
          </li>
          <li >
            <Link href="https://www.patagoniaaustralrentacar.com.ar/reservar" onClick={handleLinkClick}> 
              <span>{t.booking}</span>
            </Link>
          </li>
          <li >
            <Link href="/fleet"  onClick={handleLinkClick}  >
              <span>{t.fleet}</span>
            </Link>
          </li>
          <li >
            <Link href="/services"  onClick={handleLinkClick}>
              <span >{t.services}</span>
            </Link>
          </li>
          <li >
            <Link href="/contact" onClick={handleLinkClick}>
              <span>{t.contact}</span>
            </Link>
          </li>
          <li className={styles.nav__langItem} >
            <Image src={lang} alt="icono de banderas de paises" width={30} height={30} />
            <select  onClick={handleLinkClick}  onChange={handleChange}>
              <option value="es">ES</option>
              <option value ="en">EN</option>
            </select>
          </li> 
          </ul>
        </nav>
    </header>
  
  )
}
