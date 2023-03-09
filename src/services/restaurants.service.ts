import { Restaurants } from "../entities/restaurants/restaurants.entity"
import { AppDataSource } from "../utils/data-source"
import { Success, Error } from "../utils/restResponse"
import { Request, Response } from "express"
import { Category } from "../entities/restaurants/category.entity"
import { categoryType } from "../types/category.type"
import { CreateFileObj } from "../controllers/common.controller"
import { IResponse } from "../types/response.type"
import { restaurants } from "../data/data"


export const getAllRestaurants = async() : Promise<any> =>{

  const restaurantRepository = AppDataSource.getRepository(Restaurants)

  restaurants.map(async(data)=>{
      const restaurants = new Restaurants()
      restaurants.name = data.name
      restaurants.address = data.address
      restaurants.price = data.averageCost
      restaurants.slug=data.slug
      restaurants.time = data.time
      restaurants.images = data.image

    const res =   await restaurantRepository.save(restaurants)
      console.log('res---------------------',res)
      return res
  })

}

export const addRestaurant = async (req: Request): Promise<IResponse> => {

  try {
    let fileObj = await CreateFileObj(req);

    let param = req.body;
    param = {
      ...param,
      menu: fileObj.menu,
      images: fileObj.images
    };
    const findCategory = await AppDataSource
      .createQueryBuilder()
      .select("restaurants")
      .from(Restaurants, "restaurants")
      .where("restaurants.name = :name", { name: req.body.name })
      .getOne()

    if (!!findCategory) {
      return Error('Restaurant already exist!', [], 409)
    }
    else {

      const categoryData = Category.create(JSON.parse(req.body.category))
      const categories: any = await Category.createQueryBuilder()
        .insert()
        .into(Category)
        .values(categoryData)
        .orUpdate(['name'], ['name'])
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

      return Success('Restaurant Added!', restaurantData)
    }

  }
  catch (e) {
    console.log(e)
    return Error(e.message)
  }

}

export const fetchAllRestaurants = async (): Promise<IResponse> => {
  try {
    const restaurants = await AppDataSource
      .getRepository(Restaurants)
      .createQueryBuilder("restaurant")
      .select("restaurant")
      .orderBy("restaurant.id")
      .leftJoinAndSelect("restaurant.category", "category")
      .getMany()
      

    if (!restaurants)
      return Error('No Category Found!', [], 404)
    else
      return Success('Restaurant List!', restaurants)

  } catch (e) {
    console.log(e)
    return Error(e.message)
  }
}

export const findRestaurantsById = async (id: string): Promise<IResponse> => {

  try {
    const findRestaurants = await AppDataSource
      .createQueryBuilder()
      .select("restaurants")
      .from(Restaurants, "restaurants")
      .where("restaurants.id = :id", { id: parseInt(id) })
      .getOne()

    if (!findRestaurants)
      return Error('No Restaurant Found!', [], 404)
    else
      return Success('Restaurant List!', findRestaurants)

  } catch (e) {
    console.log(e)
    return Error(e.message)
  }

}

export const updateRestaurant = async (req: Request): Promise<IResponse> => {

  try {
    let param = req.body
    let params = req.params
    const restaurant = await AppDataSource
      .createQueryBuilder()
      .update(Restaurants)
      .set({
        name: param.name,
        images: param.images,
        time: param.time,
        address: param.address,
        slug: param.slug,
        price: param.price,
        menu: param.menu
        // category : categoryData
      })
      .where("id = :id", { id: params.id })
      .execute()

    if (!restaurant)
      return Error('No Restaurant Found!', [], 404)
    else
      return Success('Restaurant Updated!', restaurant)

  }
  catch (e) {
    console.log(e)
    return Error(e.message)
  }

}