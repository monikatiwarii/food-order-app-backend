import { FoodItem } from "../entities/restaurants/foodItem.entity";
import { foodItemType } from "../types/foodItem.type";
import { foodItem } from "../data/data";
import { AppDataSource } from "../utils/data-source";


export const insertFoods = async () : Promise<any> =>{

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

export const fetchAllFoods = async() =>{
    
    try{
    const allFoods : foodItemType[] = await AppDataSource
    .getRepository(FoodItem)
    .createQueryBuilder("fooditem")
    .select("fooditem")
    .getMany()

    return allFoods
  }catch(e){
    console.log(e)
    return e
  }
}

export const findFoodItemById = async(id:string) =>{

  try{
    const fooditem = await AppDataSource
  .createQueryBuilder()
  .select("fooditem")
  .from(FoodItem,"fooditem")
  .where("fooditem.id = :id",{id:id})
  .getOne()

  return fooditem
  }
  catch(e){
    console.log(e)
    return e
  }
  
}