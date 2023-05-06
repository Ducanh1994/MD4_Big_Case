import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category";
import {Color} from "./color";
import {Brand} from "./brand";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    price: number;
    @Column({type: 'text'})
    image: string;
    @ManyToOne(()=>Category, (category) =>{category.products})
    category: Category

    @ManyToOne(()=>Color, (color) =>{color.products})
    color: Color

    @ManyToOne(()=>Brand, (brand) =>{brand.products})
    brand: Brand
}

