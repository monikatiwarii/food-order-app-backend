import { Entity,BaseEntity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { User } from "../user/User.entity";
import Model from "../model.entity";
import { FoodItem } from "../restaurants/foodItem.entity";

@Entity('order')

export class Order extends Model{
   
    @Column()
    name :string

    @Column()
    description : string

    @Column()
    price : number

    @Column()
    quantity : string

    @ManyToOne(type =>  User, user => user.order)
    user : User[]

    @ManyToMany(type => FoodItem,fooditem=>fooditem.order)

    fooditem : FoodItem[]
}