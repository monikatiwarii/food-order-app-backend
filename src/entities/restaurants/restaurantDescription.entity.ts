import {Entity,Column} from 'typeorm'
import Model from '../model.entity';

@Entity('restaurant_description')

export class RestaurantDescription extends Model{
   
    @Column()
    image : string;

    @Column()
    title : string;

    @Column()
    description : string;
}