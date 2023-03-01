import { Entity, BaseEntity, Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, OneToMany} from 'typeorm'
import { FoodItem } from './foodItem.entity'
import { Restaurants } from './restaurants.entity'

@Entity('category')

export class Category  { 

    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    name : string
   
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at : Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at : Date

    @ManyToMany(
        ()=>Restaurants
    )
    restaurants : Restaurants

    @OneToMany(
        type =>  FoodItem, fooditem => fooditem.category
    )
    fooditem : FoodItem[]
}