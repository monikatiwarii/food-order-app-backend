import {Entity,Column, ManyToOne} from "typeorm"
import Model from "../model.entity";
import { Category } from "./category.entity";
import { Restaurants } from "./restaurants.entity";

@Entity('fooditem')

export class FoodItem extends Model {

    @Column()
    name : string;

    @Column()
    description : string;

    @Column()
    price : number;

    @Column()
    image : string;

    @Column()
    categoryid : number

    @Column()
    restaurantid : number

    @ManyToOne(type => Category,category => category.fooditem)
    category : Category

    @ManyToOne(type => Restaurants,restaurants => restaurants.fooditem)
    restaurants : Restaurants
}