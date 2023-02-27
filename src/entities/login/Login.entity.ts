import { Entity,BaseEntity,Column,PrimaryColumn } from "typeorm";

@Entity('login')

export class Login extends BaseEntity{
    @PrimaryColumn()
    id : number

    @Column({
        unique : true
    })
    email : string

    @Column()
    password : string
}