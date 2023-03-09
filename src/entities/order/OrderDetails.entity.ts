import { Entity,Column, OneToMany } from "typeorm";
import Model from "../model.entity";
import { Order } from "./Order.entity";

@Entity('order_details')

export class OrderDetails extends Model{

    @Column({
        default:0
    })
    quantity : number

    @OneToMany(type => Order,order => order.orderDetail)
    order : Order[]
}