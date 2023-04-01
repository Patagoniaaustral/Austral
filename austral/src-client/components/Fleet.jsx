import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useRouter } from "next/router";
import Image from 'next/image'

import { getCars, filterFleet, cleanFilter } from "../redux/slice/carsReducer"
import fleetEs from "../../public/locale/ES/fleet.json"
import fleetEn from "../../public/locale/EN/fleet.json"
import styles from "../../styles/Fleet.module.css"

import FleetHero from "../../public/assets/hero/Bariloche visto desde el auto.webp"
import LogoFiat from  "../../public/assets/brands/fiat-logo.png"
import LogoVW from  "../../public/assets/brands/volkswagen-logo.png"
import LogoNissan from  "../../public/assets/brands/nissan-logo.png"
import LogoRenault from  "../../public/assets/brands/Renault-Logo.png"
import LogoChe from  "../../public/assets/brands/chevrolet-logo.png"

import CarIcon1 from "../../public/assets/icons/motor-ico.png"
import CarIcon2 from "../../public/assets/icons/car-ico.png"
import CarIcon3 from "../../public/assets/icons/car-seat-ico.png"

import Prisma from "../../public/assets/fleet/Chevrolet Prisma.webp"
import Nissan from "../../public/assets/fleet/Nissan Frontier.webp"
import Spin from "../../public/assets/fleet/Chevrolet Spin.webp"
import Logan from "../../public/assets/fleet/Renault Logan.webp"
import Gol from "../../public/assets/fleet/Volkswagen Gol Trend.webp"
import Toro from "../../public/assets/fleet/Fiat Toro.webp"
import Sandero from "../../public/assets/fleet/Renault Sandero life.webp"
import Onix from "../../public/assets/fleet/Chevrolet Onix.webp"
import Vitrus from "../../public/assets/fleet/Volkswagen Vitrus.webp"

const carsImages = [
  {model: Sandero, id: 1, width: 300, heigth: 300, alt: "Alquiler de auto Renault Sandero"},
  {model: Onix, id: 2, width: 300, heigth: 300, alt : "Alquiler de auto Chevrolet Onix"},
  {model: Gol, id: 3, width: 200, heigth: 200, alt : "Alquiler de auto Volkswagen Gol Trend"},
  {model: Prisma, id: 4, width: 300, heigth: 300, alt : "Alquiler de auto Chevrolet Prisma"},
  {model: Logan, id: 5, width: 300, heigth: 300, alt: "Alquiler de auto Renault Logan"},
  {model: Spin, id: 6, width: 300, heigth: 300, alt : "Alquiler de auto Chevrolet Spin"},
  {model: Toro, id: 7, width: 300, heigth: 300, alt : "Alquiler de auto Fiat Toro"},
  {model: Nissan, id: 8, width: 300, heigth: 300, alt : "Alquiler de auto Nissan Frontier"},
  {model: Vitrus, id: 9, width: 400, heigth: 400, alt : "Alquiler de auto Volkswagen Vitrus"}
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


  window.parent.postMessage("test iframe fleet funcionando")



  return (
    <div className={styles.main}>

    <div className={styles.header}>
      <Image className={styles.header__image} src={FleetHero} alt="Familia viajando en auto en Bariloche." priority/>
      <h1 className={styles.header__title}>{t.fleet}</h1>
      <select className={styles.header__filter} name="category" onChange={handleChange}> 
          <option value="" >{t.booking.bcategory.none}</option>
          <option value="A">{t.booking.bcategory.a}</option>
          <option value="B">{t.booking.bcategory.b}</option>
          <option value="C">{t.booking.bcategory.c}</option>
          <option value="D">{t.booking.bcategory.d}</option>
          <option value="E">{t.booking.bcategory.e}</option>
          <option value="F">{t.booking.bcategory.f}</option>
      </select>
    </div>

  <div className={currentFleet.length === 2 ? styles.double__cards : styles.fleet__grid}>
    {currentFleet && currentFleet.map((car, index) => {
      return (
        <div className={styles.card} key={index}>
          <h2 className={styles.card__title}>{car.model}</h2>
          <span className={styles.card__category}>{t.catego} {car.category}</span>

          <ul className={styles.card__info} >
            <li><Image src={CarIcon3} alt="cantidad de pasajeros" width="20" heigth="20"/>{car.capacity} {t.passengers}</li>
            <li><Image src={ CarIcon2} alt="tipo de caja" width="20" heigth="20"/>{car.transmition}</li>
            <li><Image src={CarIcon1} alt="tipo de motor" width="20" heigth="20"/>{car.motor}</li>
          </ul>

          <div>
            {carsImages.map((image, index) => {
              return (
                <div key={index}>
                  {car.id === image.id && <Image className={styles.card__image} src={image.model} alt={image.alt} width={image.width} heigth={image.heigth}
                  />}
                </div>
              )})}
          </div>
        </div>
      )})}
    </div>

    <div className={styles.brands__container}>
      <Image src={LogoFiat} alt="Logo Fiat" width="60" heigth="60"/>
      <Image src={LogoVW} alt="Logo Volkswagen" width="70" heigth="70"/>
      <Image src={LogoRenault} alt="Logo Renault" width="90" heigth="90"/>
      <Image src={LogoNissan} alt="Logo Nissan" width="70" heigth="70"/>
      <Image src={LogoChe} alt="Logo Chevrolet" width="120" heigth="120"/>
    </div>
    </div>
  )
}


export default Fleet;


/// to add to json 
// {
//   "id" : 5,
//   "model": "Volkswagen Vitrus",
//   "capacity" : 5,
//   "transmition" : "Manual",
//   "motor" : "Nafta",
//   "category" : "C"
// },
