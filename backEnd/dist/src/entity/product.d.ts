import { Category } from "./category";
import { Color } from "./color";
import { Brand } from "./brand";
export declare class Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: Category;
    color: Color;
    brand: Brand;
}
