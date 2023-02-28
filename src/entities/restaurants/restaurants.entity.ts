import {Entity,BaseEntity, Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, OneToMany} from "typeorm"

@Entity('restaurants')

export class restaurants extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column('simple-json',{nullable : true})
    address :{
        city : string,
        state : string,
        country : string
    }

    @Column('simple-json',{nullable : true})
    time  : {
        opentime : string,
        closetime : string
    }

    @Column()
    slug : string;

    @Column({default : 0})
    price : number;

    @Column()
    image : string;

}