import {Entity,BaseEntity,Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('RestaurantDescription')

export class restaurantDescription extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    image : string;

    @Column()
    title : string;

    @Column()
    description : string;
}