
import { useRouter } from "next/router";
import fleetEs from "../../public/locale/ES/fleet.json"
import fleetEn from "../../public/locale/EN/fleet.json"
import { useState } from "react";

function  Fleet () {

  const [select, setSelect] = useState()
  const router = useRouter();
  const t = router.locale === "es" ? fleetEs : fleetEn;

  const handleChange = ({target}) => {
    const {value} = target
    setSelect(value)
  }


  return (
    <>
      <h1>{t.fleet}</h1>
      <select name="category" onChange={handleChange}> 
          <option value="none">{t.booking.bcategory.none}</option>
          <option value="a">{t.booking.bcategory.a}</option>
          <option value="b">{t.booking.bcategory.b}</option>
          <option value="c">{t.booking.bcategory.c}</option>
          <option value="d">{t.booking.bcategory.d}</option>
          <option value="e">{t.booking.bcategory.e}</option>
          <option value="f">{t.booking.bcategory.f}</option>
      </select>

      <div>
        <p>Categoria A</p>
        <p>Chevrolet Onix 5 Puertas</p>
      </div>
      <div>
        <p>Categoria A</p>
        <p>Renault Kwid</p>
      </div>
      <div>
        <p>Categoria A</p>
        <p></p>
      </div>
      <div>
        <p>Categoria A</p>
        <p>Volkswagen Gol Trend</p>
      </div>
      <div>
        <p>Categoria A</p>
        <p>Renault Sandero</p>
      </div>
      <div>
        <p>Categoria B</p>
        <p>Chevrolet Prisma</p>
      </div>
       <div>
        <p>Categoria B</p>
        <p>Renault Logan Life</p>
      </div>
      <div>
        <p>Categoria C</p>
        <p>Chevrolet Spin</p>
      </div>
      <div>
        <p>Categoria D</p>
        <p>Fiat Toro 4x2 Automatica</p>
      </div>
      <div>
        <p>Categoria E</p>
        <p>Nissan Frontier Manual 4x4 Diesel</p>
      </div>
    </>
  )
}




export default Fleet;

