import  {Entity,BaseEntity,Column,PrimaryGeneratedColumn } from 'typeorm'

@Entity('coupons')

export class Coupons extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string;

    @Column()
    type : string

    @Column()
    value : number
}