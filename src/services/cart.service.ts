import { Cart } from "../entities/cart/Cart.entity";
import { IAddToCart, ICartData, ICartRetUpdatedValueType, IFetchCartDataType, IFindCartDataType } from "../types/cart";
import { IResponse } from "../types/restResponse";
import { AppDataSource } from "../utils/data-source";
import { Error, Success } from "../utils/restResponse";

export const updateCart = async (req:any) : Promise<IResponse>=> {
    let param: IAddToCart = req.body
    let foodItemId = param['id']
    let userId = req['user_id']

    const FoodData = await findCartData(foodItemId, userId)
    let returnUpdatedValue: ICartRetUpdatedValueType

    try {
        if(!FoodData){
            let CartDataValue: any = {
                quantity: 1,
                fooditem: foodItemId,
                user: userId
            }
            const returnUpdatedValues = await AppDataSource
                .createQueryBuilder()
                .insert()
                .into(Cart)
                .values(CartDataValue)
                .returning('*')
                .execute()
            
            returnUpdatedValue = returnUpdatedValues.raw

        } else {
            if(FoodData.quantity <= 1 && param['action'] === 0){
                const returnUpdatedValues  = await AppDataSource
                    .createQueryBuilder()
                    .delete()
                    .from(Cart)
                    .where("id = :id", {id: FoodData.id})
                    .returning('*')
                    .execute()
                returnUpdatedValue = returnUpdatedValues.raw
                
            } else {
                let CartDataValue = {
                    quantity: (param["action"] === 0) ? FoodData.quantity - 1 : FoodData.quantity + 1
                }
    
                const returnUpdatedValues = await Cart
                    .createQueryBuilder()
                    .update()
                    .set(CartDataValue)
                    .where("id = :id", {id: FoodData.id})
                    .returning('*')
                    .execute()

                returnUpdatedValue = returnUpdatedValues.raw
            }
        }

        return Success('Item Updated!', returnUpdatedValue)

    } catch (e) {
        console.log(e);
        return Error(e.message)
    }
}

export const fetchCartData = async (userId: number): Promise<IResponse> => {
    const cartData: IFetchCartDataType = await AppDataSource
    .getRepository(Cart)
    .createQueryBuilder('cart')
    .leftJoinAndSelect("cart.fooditem", "fooditem")
    .where("cart.user = :userId", {userId: userId})
    .orderBy("cart.id","ASC")
    .getMany()

    let total: number = findSumOfCartData(cartData)

    return Success('Cart Data!',{ cartData, total})
}

const findCartData = async (foodId: number, userId: number): Promise<IFindCartDataType> => {
    const FoodData: IFindCartDataType = await AppDataSource
        .createQueryBuilder()
        .select('cart')
        .from(Cart, 'cart')
        .where("cart.user = :userId", {userId: userId})
        .andWhere("cart.fooditem = :foodItemId", {foodItemId: foodId})
        .getOne()
    return FoodData
}

export const findSumOfCartData = (cartData: any[]): number => {
    let sum: number = 0
    for(let item of cartData){
        try {
            sum += (item["quantity"] * item["fooditem"]["price"])
        } catch (error) {
            sum = 0
            break
        }
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