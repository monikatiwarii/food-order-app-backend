import {Entity,BaseEntity,Column,PrimaryColumn } from 'typeorm'

@Entity('trandingFood')

export class TrandingFood extends BaseEntity{

    @PrimaryColumn()
    id  : number;

    @Column()
    image : string;

    @Column()
    type : string;

    @Column()
    place : string;
}
