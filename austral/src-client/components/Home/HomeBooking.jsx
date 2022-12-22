import React, {useState} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function HomeBooking () {
  const [pickUpDate, setPickUpDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

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

        <DatePicker
          selected={pickUpDate}
          onChange={(pickUpDate)=> setPickUpDate(pickUpDate)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          showDisabledMonthNavigation
          placeholderText="Recogida"
        />
        <DatePicker
          selected={returnDate}
          onChange={(returnDate)=> setReturnDate(returnDate)}
          dateFormat="dd/MM/yyyy"
          minDate={pickUpDate}
          placeholderText="Devolución"
        />

        <DatePicker
          selected={startTime}
          onChange={(startTime) => setStartTime(startTime)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText="Hs Recogida"
        />

        <DatePicker
          selected={endTime}
          onChange={(endTime) => setEndTime(endTime)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText="Hs Devolución"
        />
      </div>
    </>
  );
}


export default HomeBooking;