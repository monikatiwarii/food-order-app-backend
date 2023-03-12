import { Cart } from "../entities/cart/Cart.entity";
import { Order } from "../entities/order/Order.entity";
import { OrderDetails } from "../entities/order/OrderDetails.entity";
import { IFindCouponFnRetValType } from "../types/coupons.type";
import { IResponse } from "../types/response.type";
import { AppDataSource } from "../utils/data-source";
import { Error, Success } from "../utils/restResponse";
import { findSumOfCartData, removeCartData } from "./cart.service";
import { findCouponFn } from "./coupon.service";

export const checkOut = async (req) : Promise<IResponse> =>  {
    
    let param = req.body 
    let userId: any = req.user_id
    
    try {
        let cartData  = await fetchCartData(userId)
        let sumOfCartData = findSumOfCartData(cartData)
        
        if(cartData.length === 0) 
            return Error('Cart Is already Empty!', [], 404)
        
        if(!!param.coupon){
            let couponData: IFindCouponFnRetValType = await findCouponFn(param.coupon)
            if(!couponData)
                return Error('Invalid Coupon!', [], 404)
            
            sumOfCartData = countDiscount(couponData, sumOfCartData)
        }

        if(sumOfCartData !== param["total"])
            return Error('Invalid total', [], 417)
        
        // return Error('Dummy Error')
        const OrderData = await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(Order)
            .values({
                user: userId,
                total: sumOfCartData
            })
            .execute()
            
        let orderId = OrderData.raw[0].id

        let orderDetailArr = cartData.map(val => {
            return {
                order: orderId,
                fooditem: val.fooditem.id,
                quantity: val.quantity
            }
        })

        let orderDetailsData = OrderDetails.create(orderDetailArr)

        await OrderDetails.save(orderDetailsData)
        await removeCartData(userId)

        return Success('Order Placed Successfully!')
    } catch (e) {
        console.log(e)
        return Error(e.message)
    }
}

export const fetchCartData = async (userId: number): Promise<any>=> {
    const cartData = await AppDataSource
    .getRepository(Cart)
    .createQueryBuilder('cart')
    .leftJoinAndSelect("cart.fooditem", "fooditem")
    .where("cart.user = :userId", {userId: userId})
    .getMany()
    
    return cartData
}

export const countDiscount = (couponData: IFindCouponFnRetValType, paramTotal: number): number => {

    let returnValue = 0

    if(couponData.type === 'FLAT'){
        returnValue = paramTotal - couponData.value
    } else if (couponData.type === 'PERCENTAGE'){
        returnValue = paramTotal - (paramTotal * ( couponData.value / 100 ))
    }
    return returnValue
}