import React from "react";

export const Confirmation = () => {

  // aca va el submit 
  // recibir datos, por props? en el estado?? como?
  return (
    <div>
      <h1>CONFIRME SU RESERVA</h1>
      <p>Verifique los datos de su reserva para confirmarla</p>
      <p>Codigo de reserva/// DATA DE DB//</p>

      <p>Tarfa y Adicionales</p>

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

      <button>CANCELAR</button>
       {/* // redireccionar a ?? */}
      <button>CONFIRMAR RESERVA</button> 
      {/* //AVERIGUAR COMO ENVIAR MAIL CON DATOS DE LA RESERVA  */}
    </div>
  );
};
