import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() 


const getReservation = async (req, res) => {
    try{
        const allRents = await prisma.rent.findMany()

        if(!allRents){
            return res.status(404).send({message: "Rents not founds"})
        }

        console.log(allRents, "RESERVAS")
        return res.status(200).json(allRents)
    }catch(error){
        console.log(error)
        return res.status(400).json({message: error.message || error})
    }
}

export default getReservation;