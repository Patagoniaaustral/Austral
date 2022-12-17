import React from 'react'

function HomeBooking () {
  return (
    <>
    <div>
      <h2>RESERVA</h2>
    </div>
    <div>
      <select>
        <option>Categoría</option>
        <option>Categoría A</option>
        <option>Categoría B</option>
        <option>Categoría C</option>
        <option>Categoría D</option>
        <option>Categoría E</option>
        <option>Categoría F</option>
      </select>

      
      <select>
        <option>Lugar de recogida</option>
          <option>Aeropuerto Bariloche</option>
          <option> Centro Bariloche</option>
          <option>Terminal de Omnibus</option>    
      </select>

      <select>
        <option>Lugar de devolución</option>
        <option>Aeropuerto Bariloche</option>
        <option> Centro Bariloche</option>
        <option>Terminal de Omnibus</option>    
      </select>

      <select>
        <option>Recogida</option>
        //CALENDARIO!
      </select>

      <select>
        <option>Devolución</option>
        //CALENDARIO !
      </select>

      <select>
        <option>Hs Recogida</option>
        //CALENDARIO horas!
      </select>

      <select>
        <option>Hs Devolución</option>
        //CALENDARIO horas!
      </select>
    </div>
    </>
  )
}


export default HomeBooking;