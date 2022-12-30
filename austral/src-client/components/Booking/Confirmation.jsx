import {useRouter} from 'next/router'
function Confirmation () {
 
  // hacer get by id de la reserva en redux, traer con use selector, useeffects+ dispatch y senderizar datos
  const router = useRouter()

  const handleCancel = (e) => {
    alert("Are you sure?")
    router.push("/")
  }
  
  const hadleSubmit = async(e) => {
    e.preventDefault();
    // await sendReservation(... info para hacer el POST de la reserva en el back ...)
    alert("Your reservations was made sucessfully ")
    router.push("/")
  }
  
  return (
    <div>
      <h1>CONFIRME SU RESERVA</h1>
      <p>Verifique los datos de su reserva para confirmarla</p>
      <p>Codigo de reserva</p> {/* //deberia ser el id?? o que puedo usar de codigo? */}

      <h2>Tarifa y Adicionales</h2>

      <p>Categoria Elegida</p>
      <p>valor diario</p>

      <p>Dias de reserva</p>
      <p>valor de la reserva</p>
      <p>adiciional</p>

      <p>total a pagar</p>

      <h2> detalles de su reserva</h2>
      <p>fecha desde:</p>
      <p>fecha hasta:</p>
      <p>Lugar de retiro</p>
      <p>lugar de devolucion</p>

      <button onClick={handleCancel}>CANCELAR</button> 
      <button type="submit" onClick={hadleSubmit}>CONFIRMAR RESERVA</button> 
    </div>
  );
};


export default Confirmation;