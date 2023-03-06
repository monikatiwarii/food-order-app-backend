import { Order } from "../entities/order/Order.entity";
import { AppDataSource } from "../utils/data-source";
import { Request,Response } from "express";


export const fetchAllOrder = async()=>{

    try{
        const order = await AppDataSource.getRepository(Order)
        .createQueryBuilder("order")
        .select("order")
        .getMany()

        return order
    }
    catch(e){
        console.log(e)
        return e
    }
}


export const findOrderById = async(id:string)=>{
  try{
        const order = await AppDataSource
        .createQueryBuilder()
        .select("order")
        .from(Order,"order")
        .where("order.id = :id", { id: parseInt(id) })
        .getOne()

  } catch(e){
    console.log(e)
    return e
  }  
}

export const findOrderByUserId = async(id:string)=>{
    try{
        const order = await AppDataSource
            .createQueryBuilder()
            .select("order")
            .from(Order,"order")
            .where("order.userId = :id",{id:parseInt(id)})
            .getOne()

            return order

    }catch(e){
        console.log(e)
         return e
    }
}