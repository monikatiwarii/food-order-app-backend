import {Entity,BaseEntity, Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, ManyToMany, JoinColumn, JoinTable, OneToMany} from "typeorm"
import { Category } from "./category.entity";
import { FoodItem } from "./foodItem.entity";

@Entity('restaurants')

export class Restaurants{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column('simple-json',{nullable : true})
    address :{
        city : string,
        state : string,
        country : string
    }

    @Column('simple-json',{nullable : true})
    time  : {
        opentime : string,
        closetime : string
    }

    @Column()
    slug : string;

    @Column({default : 0})
    price : number;

    @Column()
    image : string;

    @Column('simple-json',{nullable : true})
    menu :{
        images : string
    }

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at : Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at : Date
 

    @ManyToMany(
        ()=>Category
    )
    category : Category[]

    @OneToMany(type => FoodItem, fooditem=> fooditem.restaurants)
    fooditem : FoodItem[]
}