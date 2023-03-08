import { Cart } from "../entities/cart/Cart.entity";
import { IRespObj, IResponse } from "../types/response.type";
import { AppDataSource } from "../utils/data-source";
import { Error, Success } from "../utils/restResponse";

export const updateCart = async (req) : Promise<IResponse>=> {
    let param = req.body
    let foodItemId: any = param['id']
    let userId : any = 1
    // let userId: any = req['user_id']

    const FoodData = await findCartData(foodItemId, userId)
    let returnUpdatedValue: any

    try {
        if(!FoodData){
            let CartDataValue = {
                quantity: 1,
                fooditem: foodItemId,
                user: userId
            }   
            returnUpdatedValue = await AppDataSource
                .createQueryBuilder()
                .insert()
                .into(Cart)
                .values(CartDataValue)
                .returning('*')
                .execute()

            returnUpdatedValue = returnUpdatedValue.raw

        } else {
            if(FoodData.quantity <= 1 && param['action'] === 0){
                returnUpdatedValue = await AppDataSource
                    .createQueryBuilder()
                    .delete()
                    .from(Cart)
                    .where("id = :id", {id: FoodData.id})
                    .returning('*')
                    .execute()
                returnUpdatedValue = returnUpdatedValue.raw
                
            } else {
                let CartDataValue = {
                    quantity: (param["action"] === 0) ? FoodData.quantity - 1 : FoodData.quantity + 1
                }
    
                returnUpdatedValue = await Cart
                    .createQueryBuilder()
                    .update()
                    .set(CartDataValue)
                    .where("id = :id", {id: FoodData.id})
                    .returning('*')
                    .execute()

                returnUpdatedValue = returnUpdatedValue.raw
            }
        }

        return Success('Item Updated!', returnUpdatedValue)

    } catch (e) {
        console.log(e);
        return Error(e.message)
    }
}

const findCartData = async (foodId: number, userId: number) => {
    const FoodData = await AppDataSource
        .createQueryBuilder()
        .select('cart')
        .from(Cart, 'cart')
        .where("cart.user = :userId", {userId: userId})
        .andWhere("cart.fooditem = :foodItemId", {foodItemId: foodId})
        .getOne()
    return FoodData
}