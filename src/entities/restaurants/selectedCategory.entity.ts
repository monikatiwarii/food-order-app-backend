import {Entity,BaseEntity,PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity('selectedCategory')

export class SelectedCategory{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
}