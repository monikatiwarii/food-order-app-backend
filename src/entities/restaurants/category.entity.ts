import { Entity, Column, ManyToMany, OneToMany} from 'typeorm'
import { restaurants } from '../../data/data'
import Model from '../model.entity'
import { FoodItem } from './foodItem.entity'
import { Restaurants } from './restaurants.entity'

@Entity('category')

export class Category extends Model  { 
    
    @Column()
    name : string

    @ManyToMany(
        ()=>Restaurants,restaurants => restaurants.category
    )
    
    restaurants : Restaurants

    @OneToMany(
        type =>  FoodItem, fooditem => fooditem.category
    )
    fooditem : FoodItem[]
}