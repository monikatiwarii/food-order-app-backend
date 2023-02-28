import { Entity,BaseEntity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity('order')

export class order extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userid : number
}