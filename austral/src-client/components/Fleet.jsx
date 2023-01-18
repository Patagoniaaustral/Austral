
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

import Prisma from "../assets/redcar.png"
import Nissan from "../assets/nissan.png"
import Spin from "../assets/chevro.png"
import Logan from "../assets/logan.png"
import gol from "../assets/gol.png"
import Toro from "../assets/toro.png"
import sandero from "../assets/sandero.png"
import onix from "../assets/onix.png"

const carsImages = [sandero, Spin, Nissan, onix, onix, gol, Logan, Prisma, Toro]

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
      <Image src={FleetImg} alt="auto alumbrado por una puesta de sol" width={1300} height={500} priority/>
      <h1>{t.fleet}</h1>
      <select name="category" onChange={handleChange}> 
          <option value="" >{t.booking.bcategory.none}</option>
          <option value="A">{t.booking.bcategory.a}</option>
          <option value="B">{t.booking.bcategory.b}</option>
          <option value="C">{t.booking.bcategory.c}</option>
          <option value="D">{t.booking.bcategory.d}</option>
          <option value="E">{t.booking.bcategory.e}</option>
      </select>
    </div>

  <div className={styles.fleet__grid}>
    {currentFleet.map((car, index) => {
      return (
        <div className={styles.fleet__grid_card} key={car.id}>
          <h2>{car.model}</h2>
          <p>{t.catego} {car.category}</p>
          
          <div>
              <Image src={CarIcon3} alt="icono de pasajeros" width="20" heigth="20"/>
              <p> {car.capacity} {t.passengers}</p> 

              <Image src={ CarIcon2} alt="icono de transmision" width="20" heigth="20"/>
              <p>{car.transmition}</p> 
          
              <Image src={CarIcon1} alt="imagen de auto" width="20" heigth="20"/>
              <p>{car.motor}</p> 
          </div>

         {car.id === 1 && <Image src={carsImages[0]} alt="imagen de auto" width="300" heigth="100"/>}
          {car.id === 2 && <Image src={carsImages[1]} alt="imagen de auto" width="300" heigth="100"/>}
          {car.id === 3 && <Image src={carsImages[2]} alt="imagen de auto" width="300" heigth="100"/>}
          {car.id === 4 && <Image src={carsImages[3]} alt="imagen de auto" width="300" heigth="100"/>}
          {car.id === 5 && <Image src={carsImages[4]} alt="imagen de auto" width="300" heigth="100"/>}
          {car.id === 6 && <Image src={carsImages[5]} alt="imagen de auto" width="300" heigth="100"/>}
          {car.id === 7 && <Image src={carsImages[6]} alt="imagen de auto" width="300" heigth="100"/>}
          {car.id === 8 && <Image src={carsImages[7]} alt="imagen de auto" width="300" heigth="100"/>}
          {car.id === 9 && <Image src={carsImages[8]} alt="imagen de auto" width="300" heigth="100"/>}

        </div>
      )
    })}
    </div>

    <div className={styles.brands__container}>
      <Image src={LogoFiat} alt="logo de fiat" width="50" heigth="50"/>
      <Image src={LogoVW} alt="logo de vw" width="50" heigth="50"/>
      <Image src={LogoRenault} alt="logo de renault" width="70" heigth="70"/>
      <Image src={LogoNissan} alt="logo de nissan" width="50" heigth="50"/>
      <Image src={LogoChe} alt="logo de chevrolet" width="90" heigth="90"/>
    </div>

    </div>
  )
}



export default Fleet;

