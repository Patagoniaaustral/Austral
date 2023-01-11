import React, {useState} from 'react'
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import navEs from "../../public/locale/ES/navbar.json"
import navEn from "../../public/locale/EN/navbar.json"
import styles from "../../styles/NavBar.module.css"
import LogoNavBar from "../../src-client/assets/logoNavBar.png"


export const NavBar = () => {
  const router = useRouter();
  const t = router.locale === "es" ? navEs : navEn;

  //FOR RESPONSIVE NAV MENU
  const [isActive, setIsActive] = useState(false);
  
  const handleNavToggle = () => {
    setIsActive((current) => !current);
  };

  const handleChange = ({target})=> {  
    const {value} = target
    router.push(router.pathname, router.pathname, {
      locale : value
    })
  }

  return (
    <header className={styles.nav__container} >
      
      <Link href="/"><Image src={LogoNavBar} alt="" width={180} height={30} /></Link>
          
        <button
           onClick={handleNavToggle}
           className={isActive ? [styles.nav_toggle, styles.nav_open].join(" ") : styles.nav_toggle}
           aria-label="toggle navigation"
      >
        <span className={isActive ? [styles.hamburger, styles.nav_open].join(" ") : styles.hamburger}></span>
      </button>

      <nav id="nav" className={isActive ? [styles.nav, styles.nav_open].join(" ") : [styles.nav, styles.nav_close].join(" ")}>
      {/* <nav> */}
        <ul>
          <li>
            <Link href="/" >
              <span>{t.home}</span>
            </Link>
          </li>
          <li >
            <Link href="/booking" >
              <span>{t.booking}</span>
            </Link>
          </li>
          <li >
            <Link href="/fleet"  >
              <span>{t.fleet}</span>
            </Link>
          </li>
          <li >
            <Link href="/services" >
              <span >{t.services}</span>
            </Link>
          </li>
          <li >
            <Link href="/contact"  >
              <span>{t.contact}</span>
            </Link>
          </li>
          <li >
            <select onChange={handleChange}>
              <option value="es">ES</option>
              <option value ="en">EN</option>
            </select>
          </li> 
          </ul>
        </nav>
    </header>
  
  )
}
