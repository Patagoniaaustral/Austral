import React from 'react'
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import navEs from "../../public/locale/es/navbar.json"
import navEn from "../../public/locale/en/navbar.json"
import styles from "../../styles/NavBar.module.css"

export const NavBar = () => {
  const router = useRouter();
  const t = router.locale === "es" ? navEs : navEn;
  //   const { data: session, status } = useSession();
    
  // const signOrNoSing = session ? (
  //   <button onClick={() => signOut({ redirect: true, callbackUrl: "/" })}>Sign out</button>
  // ) : (
  //   <button onClick={() => signIn("auth0")} >Sign in</button>
  // );

  const handleChange = ({target})=> {  // no esta funcionando bien el change!!!
    const {value} = target
    router.push(router.pathname, router.pathname, {
      locale : value
    })
  }
  


  return (
    <>
    <header className={styles.nav__container} >
       <Link href="/" >Austral</Link>
        
      <nav id="nav">
        <ul className={styles.nav__ul}>
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
            <select onChange={handleChange}>
              <option value="es">ES</option>
              <option value ="en">EN</option>
            </select>
          </li>
          <li>
            <button>{t.login}</button>
          </li>
          {/* <li>
            {signOrNoSing}
          </li> */}

          </ul>
        </nav>
    </header>
  </>
  )
}


// usar get static props??