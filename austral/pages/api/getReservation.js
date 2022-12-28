

const getReservation = async (req, res) => {
    try{
        // hacer un bull create. fill or create con el json de rentals
        return res.status(200).json({message: "ok RESERVATION"})
    }catch(error){
        console.log(error)
        return res.status(400).json({message: error.message || error})
    }
}

export default getReservation;