import { Cart } from "../entities/cart/Cart.entity";
import { IRespObj, IResponse } from "../types/restResponse";
import { AppDataSource } from "../utils/data-source";
import { Error, Success } from "../utils/restResponse";

export const updateCart = async (req:any) : Promise<IResponse>=> {
    let param = req.body
    console.log('req---------------------',req.user_id)
    let foodItemId = param['id']
    let userId = req['user_id']

    console.log('cart ka param-----------------------',param)

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

export const fetchCartData = async (userId: number): Promise<IResponse> => {
    const cartData = await AppDataSource
    .getRepository(Cart)
    .createQueryBuilder('cart')
    .leftJoinAndSelect("cart.fooditem", "fooditem")
    .where("cart.user = :userId", {userId: userId})
    .orderBy("cart.id","ASC")
    .getMany()

    let total = findSumOfCartData(cartData)

    return Success('Cart Data!',{ cartData, total})
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

export const findSumOfCartData = (cartData: any[]): number => {
    let sum = 0
    for(let item of cartData){
        try {
            sum += (item["quantity"] * item["fooditem"]["price"])
        } catch (error) {
            sum = 0
            break
        }
        // sum += (item["quantity"] * item["fooditem"]["price"])
    }
    return sum
}

export const removeCartData = async (userId: number) : Promise<void> => {
    await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Cart)
        .where("user= :id", {id: userId})
        .execute()
}