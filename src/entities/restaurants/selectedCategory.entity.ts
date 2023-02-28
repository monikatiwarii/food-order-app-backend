import {Entity,BaseEntity,PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity('selectedCategory')

export class selectedCategory extends BaseEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
}