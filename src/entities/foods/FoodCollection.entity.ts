import {Entity,BaseEntity,Column,PrimaryColumn} from 'typeorm';

@Entity('foodCollections')

export class FoodCollection extends BaseEntity{
    @PrimaryColumn()
    id : number;

    @Column()
    image : string;

}