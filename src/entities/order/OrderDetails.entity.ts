import  {Entity,Column, ManyToOne, JoinColumn } from 'typeorm'
import Model from '../model.entity';
import { FoodItem } from '../restaurants/foodItem.entity';
import { User } from '../user/User.entity';
import { Order } from './Order.entity';

@Entity('order_details')

export class OrderDetails extends Model{
    @Column()
    quantity: number

    @ManyToOne(
        () => Order, 
        (order) => order.order_details
    )
    @JoinColumn({
        name: 'order'

    })
    order: Order

    @ManyToOne(
        () => FoodItem, 
        (fooditem) => fooditem.cart
    )
    @JoinColumn({
        name: 'fooditem'

    })
    fooditem: FoodItem

}