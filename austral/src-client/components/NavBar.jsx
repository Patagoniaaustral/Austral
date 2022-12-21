import React from 'react'
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../../styles/NavBar.module.css"

export const NavBar = () => {
  //   const { data: session, status } = useSession();
    
  // const signOrNoSing = session ? (
  //   <button onClick={() => signOut({ redirect: true, callbackUrl: "/" })}>Sign out</button>
  // ) : (
  //   <button onClick={() => signIn("auth0")} >Sign in</button>
  // );

  
  return (
    <>
    <header className={styles.nav__container} >
       <Link href="/" >Austral</Link>
        
      <nav id="nav">
        <ul className={styles.nav__ul}>
          <li>
            <Link href="/" >
              <span>Home</span>
            </Link>
          </li>
          <li >
            <Link href="/booking">
              <span>Reservas</span>
            </Link>
          </li>
          <li >
            <Link href="/fleet" >
              <span>Flota</span>
            </Link>
          </li>
          <li >
            <Link href="/services">
              <span >Servicios</span>
            </Link>
          </li>
          <li >
            <Link href="/contact" >
              <span>Contacto</span>
            </Link>
          </li>
          <li >
            <select>
              <option>ES</option>
              <option>EN</option>
              <option>PT</option>
            </select>
          </li>
          <li>
            <button>INICIAR SESION</button>
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
