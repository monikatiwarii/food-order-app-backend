import {Entity,BaseEntity,Column,PrimaryColumn } from 'typeorm';

@Entity('foodlist')

export class FoodList extends BaseEntity{
    @PrimaryColumn()
    id : number;

    @Column()
    image : string;

    @Column()
    name : string;

    @Column()
    time : string;
}