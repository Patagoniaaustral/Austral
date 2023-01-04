
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Image from 'next/image'
import { useRouter } from "next/router";
import { getCars, filterFleet, cleanFilter } from "../redux/slice/carsReducer"
import fleetEs from "../../public/locale/ES/fleet.json"
import fleetEn from "../../public/locale/EN/fleet.json"
import styles from "../../styles/Fleet.module.css"
import FleetImg from "../assets/fleet.jpg"


function  Fleet () {
  const fleet = useSelector(state => state.reducerCars.cars)
  const fleetFiltred = useSelector(state => state.reducerCars.carsfiltred)
  const dispatch = useDispatch()  
  const [select, setSelect] = useState()
  const router = useRouter();
  const t = router.locale === "es" ? fleetEs : fleetEn;
  
  useEffect(() => {
    dispatch(getCars())
    return dispatch(cleanFilter())
  }, [])


  const currentFleet = fleetFiltred.length ? fleetFiltred : fleet


  if(!fleet[0]) return <div>Loading ...</div>

  const handleChange = ({target}) => {
    const {value} = target
    setSelect(value)
    value === "" ? dispatch(cleanFilter()) : dispatch(filterFleet(value))
  }

  return (
    <>
    <div className={styles.header__img}>
      <Image src={FleetImg} alt="auto alumbrado por una puesta de sol" width={1300} height={500} />
      <h1>{t.fleet}</h1>
    </div>
      <select className={styles.category__filter} name="category" onChange={handleChange}> 
          <option value="" >{t.booking.bcategory.none}</option>
          <option value="a">{t.booking.bcategory.a}</option>
          <option value="b">{t.booking.bcategory.b}</option>
          <option value="c">{t.booking.bcategory.c}</option>
          <option value="d">{t.booking.bcategory.d}</option>
          <option value="e">{t.booking.bcategory.e}</option>
      </select>

  <div className={currentFleet.length === 1 ? styles.fleet__grid_unique : styles.fleet__grid}>
    {fleet[0] && currentFleet.map((car) => {
      return (
        <div className={styles.fleet__grid_card} key={car.id}>
          <h2>{car.brand} {car.model}</h2>
          <p>Categoria : {car.category}</p>
          <p>Numero de asientos: {car.capacity}</p>
          <p>{car.motor} {car.transmition}</p>
          <p>$ {car.pricePerDay}</p>
          {/* <Image>{car.image} */}
        </div>
      )
    })}
    </div>

    </>
  )
}




export default Fleet;

