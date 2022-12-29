
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Image from 'next/image'
import { useRouter } from "next/router";
import { getCars, filterFleet } from "../redux/slice/carsReducer"
import fleetEs from "../../public/locale/ES/fleet.json"
import fleetEn from "../../public/locale/EN/fleet.json"

function  Fleet () {
  const fleet = useSelector(state => state.reducerCars.cars)
  const fleetFiltred = useSelector(state => state.reducerCars.carsfiltred)
  console.log(fleet, "filtrados")
  
  const dispatch = useDispatch()  
  const [select, setSelect] = useState()
  const router = useRouter();
  const t = router.locale === "es" ? fleetEs : fleetEn;

// cambiar database
// renderizar filtrados
// resetear filtros

  useEffect(() => {
    dispatch(getCars())
  }, [])

  const handleChange = ({target}) => {
    const {value} = target
    setSelect(value)
    dispatch(filterFleet(value))
  }

  return (
    <>
      <h1>{t.fleet}</h1>
      <select name="category" onChange={handleChange}> 
          <option value="" disabled>{t.booking.bcategory.none}</option>
          <option value="a">{t.booking.bcategory.a}</option>
          <option value="b">{t.booking.bcategory.b}</option>
          <option value="c">{t.booking.bcategory.c}</option>
          <option value="d">{t.booking.bcategory.d}</option>
          <option value="e">{t.booking.bcategory.e}</option>
          <option value="f">{t.booking.bcategory.f}</option>
      </select>

    {fleet && fleet.map((car) => {
      return (
        <div key={car.id}>
          <h2>{car.model} {car.brand}</h2>
          <p>{car.category}</p>
          {/* <Image>{car.image} */}
        </div>
      )
    })}

    </>
  )
}




export default Fleet;

