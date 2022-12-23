import React from 'react'
import { useRouter } from "next/router";
import servEs from "../../public/locale/es/services.json"
import servEn from "../../public/locale/en/services.json"
import Image from "next/image"

function Services () {

  const router = useRouter();
  const t = router.locale === "es" ? servEs : servEn;
  
  return (
    <>
    <div>
      <h1>Servicios</h1>
    </div>

    <div>
      <h2>COBERTURAS</h2>
      
      <p>Los autos cuentan con<span> seguro con franquiciado</span>  
        cuyo monto varía según la categoría del auto. La franquicia se refiere al
      <span> monto máximo por el cual el cliente debe responder ante un potencial daño en el vehículo alquilado.</span></p>
      
      <p>Por ejemplo, si se abona una franquicia de $5000 y el auto sufío un daño por un monto mayor, lo máximo que
         debo abonar es $5000.</p>
      
      <p>Es muy importante al momento de alquilar saber el monto de la franquicia, dado que eso le da al cliente la tranquilidad  de saber 
        el monto máximo que deberá abonar si se produce un año.
      </p>
    </div>

  <div>

    <div>
      <h2>ADICIONALES</h2>
      <ul>
        <li>Cada unidad cuenta con cubiertas aptas para nieve durante invierno.</li>
        <li>Sillas y booster para niños.</li>
        <li>Seguros Premium (reduce al 50% la franquicia por daños parciales)</li>
      </ul>
    </div>

    <div>
      <h2>REQUISITOS</h2>
      <div></div>
      <ul>
        <li>Documento de identidad</li>
        <li>Ser mayor de 21 años.</li>
        <li>Licencia de conducir vigente del país de origen.</li>
        <li>Tarjeta de crédito a modo de garantía.</li>
      </ul>
    </div>

    
    </div>
    </>
  )
}

export default Services;
