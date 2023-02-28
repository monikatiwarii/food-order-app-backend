import { Entity,BaseEntity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity('orderitem')

export class orderItem extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    orderid : number
    
    @Column()
    foodid : number

    @Column()
    quantity : number
}