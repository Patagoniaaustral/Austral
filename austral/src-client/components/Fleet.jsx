
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useRouter } from "next/router";
import Image from 'next/image'

import { getCars, filterFleet, cleanFilter } from "../redux/slice/carsReducer"
import fleetEs from "../../public/locale/ES/fleet.json"
import fleetEn from "../../public/locale/EN/fleet.json"
import styles from "../../styles/Fleet.module.css"

import FleetImg from "../../public/assets/hero/fleet.jpg"

import LogoFiat from  "../../public/assets/brands/logo_fiat.png"
import LogoVW from  "../../public/assets/brands/vw-logo.png"
import LogoNissan from  "../../public/assets/brands/nissan-logo.png"
import LogoRenault from  "../../public/assets/brands/Renault-Logo.png"
import LogoChe from  "../../public/assets/brands/chevrolet-logo.png"

import CarIcon1 from "../../public/assets/icons/motor-ico.png"
import CarIcon2 from "../../public/assets/icons/car-ico.png"
import CarIcon3 from "../../public/assets/icons/car-seat-ico.png"

import Prisma from "../../public/assets/fleet/prisma2.png"
import Nissan from "../../public/assets/fleet/nissan.png"
import Spin from "../../public/assets/fleet/chevro.png"
import Logan from "../../public/assets/fleet/logan.png"
import Gol from "../../public/assets/fleet/gol.png"
import Toro from "../../public/assets/fleet/toro.png"
import Sandero from "../../public/assets/fleet/sandero.png"
import Onix from "../../public/assets/fleet/onix.png"

const carsImages = [
  {model: Sandero, id: 1, width: 300, heigth: 300},
  {model: Onix, id: 4, width: 300, heigth: 300},
  {model: Gol, id: 6, width: 200, heigth: 200},
  {model: Sandero, id: 5, width: 300, heigth: 300},
  {model: Logan, id: 7, width: 300, heigth: 300},
  {model: Prisma, id: 8, width: 300, heigth: 300},
  {model: Spin, id: 2, width: 300, heigth: 300},
  {model: Toro, id: 9, width: 300, heigth: 300},
  {model: Nissan, id: 3, width: 300, heigth: 300}
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
      {/* <Image className={styles.header__image} src={FleetImg} alt="imagen de la flota" sizes="100vw" priority/> */}
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
    {currentFleet && currentFleet.map((car, index) => {
      return (
        <div className={styles.card} key={index}>
          <h2 className={styles.card__title}>{car.model}</h2>
          <span className={styles.card__category}>{t.catego} {car.category}</span>

          <ul className={styles.card__info} >
            <li><Image src={CarIcon3} alt="icono de cantidad de pasajeros" width="20" heigth="20"/>{car.capacity} {t.passengers}</li>
            <li><Image src={ CarIcon2} alt="icono de transmision automotor" width="20" heigth="20"/>{car.transmition}</li>
            <li><Image src={CarIcon1} alt="icono de motor automotor" width="20" heigth="20"/>{car.motor}</li>
          </ul>

          <div>
            {carsImages.map((image, index) => {
              return (
                <div key={index}>
                  {car.id === image.id && <Image className={styles.card__image} src={image.model} alt="modelo de auto" width={image.width} heigth={image.heigth}
                  />}
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
