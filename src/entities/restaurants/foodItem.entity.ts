import {Entity,Column, ManyToOne, ManyToMany, JoinTable, OneToMany} from "typeorm"
import { Cart } from "../cart/Cart.entity";
import Model from "../model.entity";
import { Order } from "../order/Order.entity";

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


    @ManyToOne(type => Category,category => category.fooditem)
    category : Category

    @ManyToOne(type => Restaurants,restaurants => restaurants.fooditem)
    restaurants : Restaurants

    @ManyToMany(()=>Order)
    @JoinTable({
        name : 'fooditem_order'
    })
    order : Order[]

    @OneToMany(
        () => Cart,
        (cart) => cart.fooditem
    )
    cart: Cart[]
}
