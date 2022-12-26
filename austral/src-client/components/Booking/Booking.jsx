import React from 'react'
import Link from "next/link"

function Booking () {
  
  return (
    <div>
      <p>SOY RESERVAS</p>
      <Link href="/booking/checkout"><button>RESERVAR</button></Link>
    </div>
  )
}

export default Booking;
