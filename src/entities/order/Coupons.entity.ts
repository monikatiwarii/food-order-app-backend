import  {Entity,BaseEntity,Column,PrimaryColumn } from 'typeorm'

@Entity('coupons')

export class Coupons extends BaseEntity{
    @PrimaryColumn()
    id : number

    @Column()
    name : string;

    @Column()
    type : string

    @Column()
    value : number
}