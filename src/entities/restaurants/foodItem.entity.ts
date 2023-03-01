import {Entity,BaseEntity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, ManyToOne} from "typeorm"
import { Category } from "./category.entity";
import { Restaurants } from "./restaurants.entity";

@Entity('fooditem')

export class FoodItem {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    description : string;

    @Column()
    price : number;

    @Column()
    image : string;

    @Column()
    restaurant_categoryid : number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at : Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at : Date

    @ManyToOne(type => Category,category => category.fooditem)
    category : Category

    @ManyToOne(type => Restaurants,restaurants => restaurants.fooditem)
    restaurants : Restaurants
}