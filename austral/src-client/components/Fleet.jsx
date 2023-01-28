
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useRouter } from "next/router";
import Image from 'next/image'
import { getCars, filterFleet, cleanFilter } from "../redux/slice/carsReducer"
import fleetEs from "../../public/locale/ES/fleet.json"
import fleetEn from "../../public/locale/EN/fleet.json"
import styles from "../../styles/Fleet.module.css"
import FleetImg from "../assets/fleet.jpg"

import LogoFiat from  "../../src-client/assets/logo_fiat.png"
import LogoVW from  "../../src-client/assets/vw-logo.png"
import LogoNissan from  "../../src-client/assets/nissan-logo.png"
import LogoRenault from  "../../src-client/assets/Renault-Logo.png"
import LogoChe from  "../../src-client/assets/chevrolet-logo.png"

import CarIcon1 from "../../src-client/assets/motor-ico.png"
import CarIcon2 from "../../src-client/assets/car-ico.png"
import CarIcon3 from "../../src-client/assets/car-seat-ico.png"

import Prisma from "../assets/prisma2.png"
import Nissan from "../assets/nissan.png"
import Spin from "../assets/chevro.png"
import Logan from "../assets/logan.png"
import Gol from "../assets/gol.png"
import Toro from "../assets/toro.png"
import Sandero from "../assets/sandero.png"
import Onix from "../assets/onix.png"

const carsImages = [
  {model: Sandero, id: 1},
  {model: Onix, id: 4},
  {model: Gol, id: 6},
  {model: Sandero, id: 5},
  {model: Logan, id: 7},
  {model: Prisma, id: 8},
  {model: Spin, id: 2},
  {model: Toro, id: 9},
  {model: Nissan, id: 3}
]


function  Fleet () {
 
 const dispatch = useDispatch()

 const fleet = useSelector(state => state.reducerCars.cars) 
 const fleetFiltred = useSelector(state => state.reducerCars.carsfiltred)
  
  const [select, setSelect] = useState("")
  const router = useRouter();
  const t = router.locale === "es" ? fleetEs : fleetEn;
  
  useEffect(() => {
    dispatch(getCars())
    return dispatch(cleanFilter())
  }, [])

  const currentFleet = fleetFiltred.length ? fleetFiltred : fleet;

  if(!fleet[0]) return <div className={styles.loading}>Loading ...</div>

  const handleChange = ({target}) => {
    const {value} = target
    setSelect(value)
    value === "" ? dispatch(cleanFilter()) : dispatch(filterFleet(value))
  }

  return (
    <div className={styles.main}>

    <div className={styles.header}>
      <Image className={styles.header__image} src={FleetImg} alt="auto alumbrado por una puesta de sol"  priority/>
      <h1 className={styles.header__title}>{t.fleet}</h1>
      <select className={styles.header__filter} name="category" onChange={handleChange}> 
          <option value="" >{t.booking.bcategory.none}</option>
          <option value="A">{t.booking.bcategory.a}</option>
          <option value="B">{t.booking.bcategory.b}</option>
          <option value="C">{t.booking.bcategory.c}</option>
          <option value="D">{t.booking.bcategory.d}</option>
          <option value="E">{t.booking.bcategory.e}</option>
      </select>
    </div>

  <div className={currentFleet.length === 2 ? styles.double__cards : styles.fleet__grid}>
    {currentFleet.map((car, index) => {
      return (
        <div className={styles.card} key={index}>
          <h2 className={styles.card__title}>{car.model}</h2>
          <span className={styles.card__category}>{t.catego} {car.category}</span>
          
          {/* <div >
              <Image src={CarIcon3} alt="icono de cantidad de pasajeros" width="20" heigth="20"/>
              <p> </p> 

              <Image src={ CarIcon2} alt="icono de transmision automotor" width="20" heigth="20"/>
              <p></p> 
          
              <Image src={CarIcon1} alt="icono de motor automotor" width="20" heigth="20"/>
              <p></p> 
          </div> */}

          <ul className={styles.card__info} >
            <li><Image src={CarIcon3} alt="icono de cantidad de pasajeros" width="20" heigth="20"/>{car.capacity} {t.passengers}</li>
            <li><Image src={ CarIcon2} alt="icono de transmision automotor" width="20" heigth="20"/>{car.transmition}</li>
            <li><Image src={CarIcon1} alt="icono de motor automotor" width="20" heigth="20"/>{car.motor}</li>
          </ul>

          <div>
            {carsImages.map((image, index) => {
              return (
                <div key={index}>
                  {car.id === image.id && <Image className={styles.card__image} src={image.model} alt="modelo de auto" />}
                </div>
              )})}
          </div>
        </div>
      )})}
    </div>

    <div className={styles.brands__container}>
      <Image src={LogoFiat} alt="logo de fiat" width="50" heigth="50"/>
      <Image src={LogoVW} alt="logo de volkswagen" width="50" heigth="50"/>
      <Image src={LogoRenault} alt="logo de renault" width="70" heigth="70"/>
      <Image src={LogoNissan} alt="logo de nissan" width="50" heigth="50"/>
      <Image src={LogoChe} alt="logo de chevrolet" width="90" heigth="90"/>
    </div>

    </div>
  )
}


export default Fleet;
