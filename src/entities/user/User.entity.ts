import { Entity,BaseEntity,Column,ManyToOne } from "typeorm";
import Model from "../model.entity";
import { Cart } from "../order/Cart.entity";
import {Order} from '../order/Order.entity'

@Entity('user')

export class User extends Model{
    
    @Column({
        unique : true
    })
    email : string

    @Column()
    password : string

    @ManyToOne(type => Order,order => order.user)
    order : Order

    @ManyToOne(type => Cart,cart => cart.user)
    cart : Cart
}