import { Entity,BaseEntity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity('restaurant_category')

export class restaurantCategory extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    restaurantid : number

    @Column()
    categoryid : number
}