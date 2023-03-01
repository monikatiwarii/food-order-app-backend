import { Entity,BaseEntity,Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import {Order} from '../order/Order.entity'

@Entity('user')

export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @Column({
        unique : true
    })
    email : string

    @Column()
    password : string

    @OneToMany(type => Order,order=>order.user)
    order : Order
}