import { Entity,BaseEntity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('order')

export class order extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userid : number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at : Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at : Date
}