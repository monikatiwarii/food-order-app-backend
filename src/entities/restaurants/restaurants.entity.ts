import {Entity, Column,ManyToMany, OneToMany, JoinTable, JoinColumn} from "typeorm"
import Model from "../model.entity";
import { Category } from "./category.entity";
import { FoodItem } from "./foodItem.entity";

@Entity('restaurants')

export class Restaurants extends Model{
   
    @Column({
        unique:true
    })
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

    @Column('jsonb',{nullable : true})
    images : string

    @Column('jsonb',{nullable : true})
    menu :string[]
   
    @ManyToMany(
        ()=>Category 
    )
    @JoinTable({
        name : 'restaurant_category',
        joinColumn :{
            name : "restaurantid",
            referencedColumnName:'id'
            
        },
        inverseJoinColumn:{
            name : "categoryid",
            referencedColumnName:'id'
        }
    })
    
    category : Category[]

    @OneToMany(type => FoodItem, fooditem=> fooditem.restaurants)
    fooditem : FoodItem[]
  restaurant: Express.Multer.File;
}