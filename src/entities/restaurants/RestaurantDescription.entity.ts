import {Entity,BaseEntity,Column} from 'typeorm'

@Entity('RestaurantDescription')

export class RestaurantDescription extends BaseEntity{
    @Column()
    id : number;

    @Column()
    image : string;

    @Column()
    title : string;

    @Column()
    description : string;
}