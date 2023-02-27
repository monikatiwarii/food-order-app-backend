import {Entity,BaseEntity,PrimaryColumn,Column} from 'typeorm'

@Entity('selectedCategory')

export class SelectedCategory extends BaseEntity{

    @PrimaryColumn()
    id : string;

    @Column()
    name : string;
    
}