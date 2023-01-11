
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
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
import RedCar from "../assets/redcar.png"
import Nissan from "../assets/nissan.png"

function  Fleet (props) {

 const dispatch = useDispatch()
 dispatch(getCars(props.props))

 //const fleet = useSelector(state => state.reducerCars.cars) 
  const fleetFiltred = useSelector(state => state.reducerCars.carsfiltred)
  


  const [select, setSelect] = useState("")
  const router = useRouter();
  const t = router.locale === "es" ? fleetEs : fleetEn;
  
  // useEffect(() => {
  //   dispatch(getCars())
  //   return dispatch(cleanFilter())
  // }, [])


  const currentFleet = fleetFiltred.length ? fleetFiltred : props.props


  //if(!fleet[0]) return <div className={styles.loading}>Loading ...</div>
  //if(!props) return <div className={styles.loading}>Loading ...</div>

  const handleChange = ({target}) => {
    const {value} = target
    setSelect(value)
    value === "" ? dispatch(cleanFilter()) : dispatch(filterFleet(value))
  }

  return (
    <div className={styles.main}>

    <div className={styles.header}>
      <Image src={FleetImg} alt="auto alumbrado por una puesta de sol" width={1300} height={500} priority={true}/>
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
    {currentFleet.map((car) => {
      return (
        <div className={styles.fleet__grid_card} key={car.id}>
          <h2>{car.brand} {car.model}</h2>
          <p>{t.catego} {car.category}</p>
          
          <div>
              <Image src={CarIcon3} alt="icono de pasajeros" width="20" heigth="20"/>
              <p> {car.capacity} {t.passengers}</p> 

              <Image src={ CarIcon2} alt="icono de transmision" width="20" heigth="20"/>
              <p>{car.transmition}</p> 
          
              <Image src={CarIcon1} alt="imagen de auto" width="20" heigth="20"/>
              <p>{car.motor}</p> 
          </div>

          <Image src={RedCar} alt="imagen de auto" width={200} heigth={100}/>

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

