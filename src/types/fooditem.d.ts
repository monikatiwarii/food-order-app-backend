import { Category } from "../entities/restaurants/category.entity"
import { Restaurants } from "../entities/restaurants/restaurants.entity"

export interface IParamAddFoods {
    name: string
    image: string
    price: number
    category: Category
    description: string
    restaurants: Restaurants
  }