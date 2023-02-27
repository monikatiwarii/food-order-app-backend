import {Entity,BaseEntity,PrimaryColumn,Column} from 'typeorm'

@Entity('selectedCategory')

export class SelectedCategory extends BaseEntity{

    @Column()
    id : string;

    @Column()
    name : string;
    
}