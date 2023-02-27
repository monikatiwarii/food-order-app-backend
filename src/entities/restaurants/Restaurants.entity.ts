import {Entity,BaseEntity, Column,PrimaryColumn,} from "typeorm"

@Entity('restaurants')

export class Restaurants extends BaseEntity{
    @PrimaryColumn()
    RestaurantId : number;

    @Column()
    name : string;

    @Column()
    address : string;

    @Column()
    time  : string;

    @Column()
    slug : string;

    @Column()
    averageCost : number;

    @Column()
    image : string;

}