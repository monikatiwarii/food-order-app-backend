import { Entity, BaseEntity, Column,PrimaryColumn} from 'typeorm'

@Entity('category')

export class Category extends BaseEntity { 

    @PrimaryColumn()
    categoryId : string 
    
    @Column()
    name : string
}