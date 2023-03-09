import { Request } from "express";
import { Cart } from "../entities/order/Cart.entity";
import { IResponse } from "../types/response.type";
import { Success } from "../utils/restResponse";


export const addCartService = async(req : Request) : Promise<IResponse> =>{

    let param = req.body
    const cartData = new Cart()

    cartData.quantity = param.quantity
    cartData.fooditem = param.fooditem
    cartData.user = req["user_id"]

    await Cart.save(cartData)   
    return Success("Data Added!",cartData)
}