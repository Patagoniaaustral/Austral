

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
        // crear reservas en la base de datos
        // implememtar nodemailer para confirmar reserva
        return res.status(200).json({message: "ok POST RESERVATION"})
    }catch(error){
        console.log(error)
        return res.status(400).json({message: error.message || error})
    }
}

export default postReservation;