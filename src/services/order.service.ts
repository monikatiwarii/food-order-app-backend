import { Order } from "../entities/order/Order.entity";
import { IResponse } from "../types/restResponse";
import { AppDataSource } from "../utils/data-source";
import { Success, Error } from "../utils/restResponse";

export const fetchAllOrder = async(): Promise<IResponse>=>{
    try{
        const order: Order[] = await AppDataSource.getRepository(Order)
        .createQueryBuilder("order")
        .select("order")
        .getMany()
        return Success('Order Data!', order)
    }
    catch(e){
        console.log(e)
        return Error('Server Error')
    }
}

export const findOrderById = async(id:string): Promise<IResponse>=>{
  try{
    const order: Order = await AppDataSource
        .createQueryBuilder()
        .select("order")
        .from(Order,"order")
        .where("order.id = :id", { id: parseInt(id) })
        .getOne()
    return Success('Order Data!', order)
  } catch(e){
    console.log(e)
    return Error('Server Error')
  }  
}

export const findOrderByUserId = async(id:string): Promise<IResponse>=>{
    try{
    const order: Order = await AppDataSource
        .createQueryBuilder()
        .select("order")
        .from(Order,"order")
        .where("order.userId = :id",{id:parseInt(id)})
        .getOne()

        return Success('Order Data!', order)
    }catch(e){
        console.log(e)
        return Error('Server Error')
    }
}