import {Entity,BaseEntity,PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity('selected_category')

export class SelectedCategory{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
}