import { BaseEntity,PrimaryGeneratedColumn,UpdateDateColumn,CreateDateColumn } from "typeorm";


export default abstract class Model extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date
}