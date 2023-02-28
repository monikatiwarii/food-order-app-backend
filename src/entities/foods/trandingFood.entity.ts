import {Entity,BaseEntity,Column,PrimaryGeneratedColumn } from 'typeorm'

@Entity('trandingFood')

export class trandingFood extends BaseEntity{

    @PrimaryGeneratedColumn()
    id  : number;

    @Column()
    image : string;

    @Column()
    type : string;

    @Column()
    place : string;
}
