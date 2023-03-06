import { Restaurants } from "../entities/restaurants/restaurants.entity"
import { AppDataSource } from "../utils/data-source"
// import { category, restaurants } from "../data/data"
import { restaurantType } from "../types/restaurant.type"
import { Success,Error } from "../utils/restResponse"
import { Request,Response } from "express"
import { Category } from "../entities/restaurants/category.entity"
import { categoryType } from "../types/category.type"
import { CreateFileObj } from "../controllers/common.controller"



// export const insertRestaurants = async(req: Request , res : Response) : Promise<any>=>{

//     const restaurantRepository = AppDataSource.getRepository(Restaurants)  
//     restaurants.map(async(data)=>{
//         const restaurants = new Restaurants()
//         restaurants.name = data.name
//         restaurants.address = data.address
//         restaurants.price = data.averageCost
//         restaurants.slug=data.slug
//         restaurants.time = data.time
//         restaurants.images = data.image 
//         const res =   await restaurantRepository.save(restaurants)
//         console.log('res---------------------',res)
//         return res
//      })
// }


export const addRestaurant  =  async(req:Request,res:Response)=>{
  let fileObj = await CreateFileObj(req);
  
  let param = req.body;
  param = {
    ...param,
    menu: fileObj.menu,
    images: fileObj.images
  };
  const categoryData = Category.create(JSON.parse(req.body.category))
  console.log('categoty data----------',categoryData)
      const categories : any = await Category.createQueryBuilder()
        .insert()
        .into(Category)
        .values(categoryData)
        .orUpdate(['name'],['name'])
        .execute();

      const restaurantData = new Restaurants();
      restaurantData.name = param.name;
      restaurantData.images = param.images;
      restaurantData.time = param.time;
      restaurantData.address = param.address;
      restaurantData.slug = param.slug;
      restaurantData.price = param.price;
      restaurantData.menu = param.menu
      restaurantData.category = categoryData;

      await Restaurants.save(restaurantData);

      return restaurantData
}


export const fetchAllRestaurants = async() =>{
  try{ 
  const restaurants : Restaurants[] = await AppDataSource
    .getRepository(Restaurants)
    .createQueryBuilder("restaurant")
    .select("restaurant")
    .getMany()    

    return restaurants
  }catch(e){
    console.log(e)
    return e
  }
}

export const findRestaurantsById = async(id:string)=>{

  try {
    const findRestaurants = await AppDataSource
    .createQueryBuilder()
    .select("restaurants")
    .from(Restaurants, "restaurants")
    .where("restaurants.id = :id", { id: parseInt(id) })
    .getOne()

    return findRestaurants
   
  } catch (error) {
    console.log(error)
    return error
  }

} 