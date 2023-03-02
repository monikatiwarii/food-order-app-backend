import { Entity,BaseEntity,Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
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

    @OneToMany(type => Order,order=>order.user)
    order : Order
}