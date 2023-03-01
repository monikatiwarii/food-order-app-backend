import {Entity,BaseEntity,Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('RestaurantDescription')

export class RestaurantDescription{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    image : string;

    @Column()
    title : string;

    @Column()
    description : string;
}