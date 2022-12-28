

const postReservation = async (req, res) => {
    try{
        //req.body
        // crear reservas en la base de datos
        return res.status(200).json({message: "ok POST RESERVATION"})
    }catch(error){
        console.log(error)
        return res.status(400).json({message: error.message || error})
    }
}

export default postReservation;