import { Entity,BaseEntity,Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Cart } from "../cart/Cart.entity";
import Model from "../model.entity";
import {Order} from '../order/Order.entity'

@Entity('user')

export class User extends Model{
    
    @Column({
        unique : true
    })
    email : string

    @Column()
    password : string

    @OneToMany(
        () => Cart,
        (cart) => cart.user
    )
    cart: User[]

    @OneToMany(
        () => Order,
        (order)=> order.user
    )
    order: Order[]
}