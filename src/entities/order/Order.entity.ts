import { Entity,Column,ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { User } from "../user/User.entity";
import Model from "../model.entity";
import { FoodItem } from "../restaurants/foodItem.entity";
import { OrderDetails } from "./OrderDetails.entity";

@Entity('order')

export class Order extends Model{
     
    @Column({
        default : 0
    })
    total : number

    @OneToMany(
        type =>  User, user => user.order
    )
    user: User[];

    @ManyToOne(type => OrderDetails,orderDetail => orderDetail.order)
    orderDetail: OrderDetails;

}