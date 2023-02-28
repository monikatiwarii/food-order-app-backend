import { Entity,BaseEntity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('login')

export class login extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @Column({
        unique : true
    })
    email : string

    @Column()
    password : string
}