import {Entity, Column,ManyToMany, OneToMany} from "typeorm"
import Model from "../model.entity";
import { Category } from "./category.entity";
import { FoodItem } from "./foodItem.entity";

@Entity('restaurants')

export class Restaurants extends Model{
   
    @Column()
    name : string;

    @Column('simple-json',{nullable : true})
    address :{
        city : string,
        state : string,
        country : string
    }

    @Column('simple-json',{nullable : true})
    time  : {
        opentime : string,
        closetime : string
    }

    @Column()
    slug : string;

    @Column({default : 0})
    price : number;

    @Column()
    image : string;

    @Column('simple-json',{nullable : true})
    menu :{
        images : string
    }

   
    @ManyToMany(
        ()=>Category
    )
    category : Category[]

    @OneToMany(type => FoodItem, fooditem=> fooditem.restaurants)
    fooditem : FoodItem[]
}