import { Entity, BaseEntity, Column,PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from 'typeorm'

@Entity('category')

export class category extends BaseEntity { 

    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    name : string
   
}