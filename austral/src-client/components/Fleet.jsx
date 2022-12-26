import React from 'react'
import { useRouter } from "next/router";
import fleetEs from "../../public/locale/es/fleet.json"
import fleetEn from "../../public/locale/en/fleet.json"

function  Fleet () {


  const router = useRouter();
  const t = router.locale === "es" ? fleetEs : fleetEn;

  return (
    <>
    <div>
      <h1>{t.fleet}</h1>
    </div>

    <div>
      {/* POR CADA CARD 
      Buscar Iconos! x5 texto + imagen*/}
    </div>

{/* ZONA ICONOS DE MARCAS */}
<div>
    <input type="text" placeholder={t.fplace}/> 
    {/* // Incluir icono de lupa */}
    <div>
      <div></div>  
      <div></div>  
      <div></div>  
      <div></div>  
      <div></div>  
    </div>
</div>
    </>
  )
}


export default Fleet;

