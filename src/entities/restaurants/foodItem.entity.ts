import {Entity,BaseEntity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"

@Entity('fooditem')

export class foodItem extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    description : string;

    @Column()
    price : number;

    @Column()
    image : string;

    @Column()
    restaurant_categoryid : number

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at :Date
}