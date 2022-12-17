import React from 'react'
import Link from "next/link"

function Slider () {
  return (
    <>
    <div>
      <h2>UN MODELO PARA CADA NECESIDAD</h2>
      <p>Viaje en familia, con amigos, por turismo o de negocios, en Austral tenemos un modelo para cada situación.
        Vas a poder visitar los mejores escenarios naturales, disfrutar la noche en salidas gourmet o conociendo 
        rincones más extravagantes de tu destino. 
      </p>
      
      <Link href="/fleet">
        <button>VER MÁS</button>
      </Link>
    </div>
    <div>
      {/* IMAGEN */}
    </div>
    </>
  )
}


export default Slider;
