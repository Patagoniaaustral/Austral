import React from 'react'
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

  const handleChange = ({target})=> {  
    const {value} = target
    router.push(router.pathname, router.pathname, {
      locale : value
    })
  }

  return (
    <>
    <header className={styles.nav__container} >
       <Link className={styles.logo} href="/" >
         <Image src={LogoNavBar} alt="" width={180} height={30} />
        </Link>
        
      <nav>
        <ul className={styles.nav__links}>
          <li>
            <Link href="/" locale={router.locale} >
              <span>{t.home}</span>
            </Link>
          </li>
          <li >
            <Link href="/booking" locale={router.locale}>
              <span>{t.booking}</span>
            </Link>
          </li>
          <li >
            <Link href="/fleet" locale={router.locale} >
              <span>{t.fleet}</span>
            </Link>
          </li>
          <li >
            <Link href="/services" locale={router.locale}>
              <span >{t.services}</span>
            </Link>
          </li>
          <li >
            <Link href="/contact" locale={router.locale} >
              <span>{t.contact}</span>
            </Link>
          </li>
          <li >
            <select value= {router.locale} onChange={handleChange}>
              <option value="es">ES</option>
              <option value ="en">EN</option>
            </select>
          </li> 
          </ul>
        </nav>
    </header>
  </>
  )
}


// usar get static props??