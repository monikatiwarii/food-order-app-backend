import  {Entity,BaseEntity,Column,PrimaryGeneratedColumn } from 'typeorm'
// import { ECouponTypes } from '../../types/coupons.d';

export enum ECouponTypes {
    "PERCENTAGE"= "PERCENTAGE",
    "FLAT"= "FLAT"
  }

@Entity('coupons')

export class Coupons extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string;

    @Column({
        type: 'enum',
        enum: ECouponTypes
    })
    type : string

    @Column()
    value : number
}