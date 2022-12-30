

const postReservation = async (req, res) => {
    try{
        // name : "",
        // lastname : "",
        // phone : "",
        // email : "",
        // flight : "",
        // pickupplace : "",
        // returnplace : "",
        // message : "",
        // extras : {
        //   conductor : "",
        //   asiento : "",
        //   seguro : ""
        // }
      
        //const {user, car, ...} = req.body
        // crear reservas en la base de datos con create pero estableciendo tambien relaciones, onde cambio la prop de available en cars 
        // la data que me llega del usuario para hacer la reserva la deberia uardar en un modelo user que no tengo
        // implememtar nodemailer para confirmar reserva
        return res.status(200).json({message: "ok POST RESERVATION"})
    }catch(error){
        console.log(error)
        return res.status(400).json({message: error.message || error})
    }
}

export default postReservation;