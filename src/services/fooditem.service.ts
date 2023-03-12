import { FoodItem } from "../entities/restaurants/foodItem.entity";
import { foodItemType } from "../types/foodItem.type";
import { foodItem } from "../data/data";
import { AppDataSource } from "../utils/data-source";
import { Request, Response } from "express";
import { IResponse } from "../types/response.type";
import { Error, Success } from "../utils/restResponse";
import { Category } from "../entities/restaurants/category.entity";


export const insertFoods = async ()  =>{

  const foodItemRepository = AppDataSource.getRepository(FoodItem)

  foodItem.map(async (data)=>{
   const foodItems = new FoodItem()
   foodItems.name = data.name
   foodItems.description = data.description
   foodItems.price = data.price
   foodItems.image = data.image
   const res = await foodItemRepository.save(foodItems)
   return res
  })
}

export const addFoods = async (bodyData : any): Promise<IResponse> => {
  try {
  
    let param = bodyData
    const fooditem = new FoodItem()
    fooditem.name = param.name;
    fooditem.image = param.image;
    fooditem.price = param.price;
    fooditem.category = param.category;
    fooditem.description = param.description;
    fooditem.restaurants = param.restaurants;

    await FoodItem.save(fooditem)

    return Success('Food Item Added!', foodItem)
  }
  catch (e) {
    console.log(e)
    return Error(e.message)
  }

}

export const fetchAllFoods = async () : Promise<IResponse> => {

  try {
    const allFoods= await AppDataSource
      .getRepository(FoodItem)
      .createQueryBuilder("fooditem")
      .select("fooditem")
      .leftJoin("fooditem.category","category")
      .getMany()

      console.log('alll foooddsss---------------',allFoods)
      if(!allFoods)
            return Error('No FoodItem Found!', [], 404)
        else
          return Success('Food Lists!', allFoods)

  } catch (e) {
    console.log(e)
    return Error(e.message)
  }
}

export const categoryWiseFoods = async(req:Request):Promise<IResponse> =>{
  try {
    const fooditem = await AppDataSource
      .createQueryBuilder()
      .select(["fooditem"])
      .from(FoodItem, "fooditem")
      .leftJoin("fooditem.category","category")
      .leftJoin("fooditem.restaurants","restaurants")  
      .where("fooditem.restaurantsId = :rid",{rid:parseInt(req.params.rId)})
      .andWhere("fooditem.categoryId = :id", { id: req.params.cId })
      .getRawMany()

      if(!fooditem) 
        return Error('No FoodItem Found!', [], 404)
      else
        return Success('Food Lists!', fooditem)
  }catch (e) {
    console.log(e)
    return Error(e.message)
  }
}

export const findFoodItemById = async (id: string): Promise<IResponse> => {

  try {
    const fooditem = await AppDataSource
      .createQueryBuilder()
      .select("fooditem")
      .from(FoodItem, "fooditem")
      .where("fooditem.id = :id", { id: id })
      .getOne()

      if(!fooditem) 
        return Error('No FoodItem Found!', [], 404)
      else
        return Success('Food Lists!', fooditem)
  }
  catch (e) {
    console.log(e)
    return Error(e.message)
  }

}