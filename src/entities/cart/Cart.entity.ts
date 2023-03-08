import  {Entity,Column, ManyToOne, JoinColumn } from 'typeorm'
import Model from '../model.entity';
import { User } from '../user/User.entity';

@Entity('cart')

export class Cart extends Model{
    @Column()
    quantity: number

    @ManyToOne(
        () => User, 
        (user) => user.Cart
    )
    @JoinColumn({
        name: 'user'

    })
    user: User

}