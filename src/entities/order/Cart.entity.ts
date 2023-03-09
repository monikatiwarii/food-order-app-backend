import { Entity,Column, OneToMany, JoinColumn} from "typeorm";
import Model from "../model.entity";
import { FoodItem } from "../restaurants/foodItem.entity";
import { User } from "../user/User.entity";

@Entity('cart')

export class Cart extends Model{

    @Column({
        default : 0
    })
    quantity : number

    @OneToMany(type => User,user=>user.cart)
    @JoinColumn({
        name: "user_id",
      })
    user : User[]

    @OneToMany(type => FoodItem,fooditem => fooditem.cart)
    fooditem  :FoodItem[]

   
      
}