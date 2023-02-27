import {Entity,BaseEntity,Column,PrimaryColumn} from "typeorm"

@Entity('fooditem')

export class FoodItem extends BaseEntity {

    @PrimaryColumn()
    FooodId : number;

    @Column()
    name : string;

    @Column()
    description : string;

    @Column()
    price : number;

    @Column()
    image : string;

    @Column()
    tags : string;
    
    @Column()
    quantity : number;

    @Column()
    addToCart : boolean;
}