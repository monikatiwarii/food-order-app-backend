import  {Entity,Column, ManyToOne, JoinColumn } from 'typeorm'
import Model from '../model.entity';
import { FoodItem } from '../restaurants/foodItem.entity';
import { User } from '../user/User.entity';

@Entity('cart')

export class Cart extends Model{
    @Column()
    quantity: number

    @ManyToOne(
        () => User, 
        (user) => user.cart
    )
    @JoinColumn({
        name: 'user'

    })
    user: User

    @ManyToOne(
        () => FoodItem, 
        (fooditem) => fooditem.cart
    )
    @JoinColumn({
        name: 'fooditem'

    })
    fooditem: FoodItem

}