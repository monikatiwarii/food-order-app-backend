import {Entity,BaseEntity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity('foodCollections')

export class foodCollection extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    image : string;

}