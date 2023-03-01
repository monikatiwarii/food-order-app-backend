import { FoodItem } from "../entities/restaurants/foodItem.entity";
import { foodItemType } from "../types/foodItem.type";
import { foodItem } from "../data/data";
import { AppDataSource } from "../utils/data-source";

export const getAllFoods = async () : Promise<any> =>{

    const foodItemRepository = AppDataSource.getRepository(FoodItem)

    foodItem.map(async (data)=>{
     const foodItems = new FoodItem()
     foodItems.name = data.name
     foodItems.description = data.description
     foodItems.price = data.price
     foodItems.image = data.image
     foodItems.quantity = data.quantity
     

     const res = await foodItemRepository.save(foodItems)
     return res
    })
}