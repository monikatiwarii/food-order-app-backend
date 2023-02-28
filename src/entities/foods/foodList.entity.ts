import {Entity,BaseEntity,Column,PrimaryGeneratedColumn } from 'typeorm';

@Entity('foodlist')

export class foodList extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    image : string;

    @Column()
    name : string;

    @Column()
    time : string;
}