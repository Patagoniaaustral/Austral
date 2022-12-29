
import { PrismaClient } from '@prisma/client'
import cars from './data/cars.json'

const prisma = new PrismaClient() 

const getAllCars = async (req, res) => {
    try{
        const allCars = await prisma.cars.findMany()
     
        if(allCars.length === 0){
         await prisma.cars.createMany({
                data: cars,
            })
        }

        const seedCars = await prisma.cars.findMany()

        prisma.$disconnect()
        return res.status(200).json(seedCars)
    }catch(error){
        console.log(error)
        return res.status(400).json({message: error.message || error})
    }
}

export default getAllCars;

