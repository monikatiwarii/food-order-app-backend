import { Entity,BaseEntity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../user/User.entity";
import Model from "../model.entity";
import { FoodItem } from "../restaurants/foodItem.entity";

@Entity('order')

export class Order extends Model{
   
    @Column()
    price : number

    @ManyToOne(
        () => User,
        (user) => user.order,
        {
            onDelete: "CASCADE"
        }
    )
    @JoinColumn({
        name : "user"
    })
    user: User
}