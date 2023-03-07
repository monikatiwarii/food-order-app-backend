import  {addRestaurant,fetchAllRestaurants, findRestaurantsById} from '../services/restaurants.service'
import { Request,Response } from 'express'
import { restaurantType } from '../types/restaurant.type'

// export const insertRestaurant = async(req : Request,res : Response)=>{
//     const restaurantList :restaurantType[] = await insertRestaurants(req, res)
//     try{
//         res.status(200).send({message : 'restaurant list',restaurantList})
//     }catch(e){
//         res.status(500).send({message : 'server error',data:e})
//     }
// }

export const addRestaurants = async(req:Request,res:Response)=>{
    try{
       
        const restaurant  = await addRestaurant(req,res)
        return res.status(200).send({message:'Restaurant Added!',data:restaurant})
    }catch(e){
        console.log(e)
        return res.status(500).send({message:e.message})
    }


} 

export const allRestaurantsList = async(req:Request,res:Response)=>{
    
    try{
        const allRestaurants = await  fetchAllRestaurants()
        res.status(200).send({message : 'restaurant list',allRestaurants})

        if(allRestaurants.length === 0){
            res.status(404).send({message : 'No recod founds!'})
        }
    }
    catch(e){
        console.log(e);
        res.status(500).send({message:e.message})   
     }
}

export const getOneRestaurant = async(req:Request,res:Response)  =>{
    try{
        const restaurant = await findRestaurantsById(req.params.id)

        if(!restaurant){
            res.status(404).send({message : 'No recod founds!'})
        }
        return res.status(200).send({message:'restaurant',data:restaurant})
    }
    catch(e){
        console.log(e);
        res.status(500).send({message:e.message})   
    }
}