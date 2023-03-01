import { Entity,BaseEntity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at : Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at : Date
}