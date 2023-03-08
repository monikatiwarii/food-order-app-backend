import { Entity,BaseEntity,Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Model from "../model.entity";

export enum CopuponTypeEnum {
    'FLAT' = 'FLAT', 
    'PERCENTAGE' = 'PERCENTAGE'
}

@Entity('user')
export class DiscountCoupon extends Model{
    
    @Column({
        unique : true
    })
    name : string

    @Column({
        type : 'enum',
        enum: CopuponTypeEnum
    })
    type: string
    
    @Column()
    value: number
}