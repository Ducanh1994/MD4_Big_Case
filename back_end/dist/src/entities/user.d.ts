import { Order } from "./order";
import { Role } from "./role";
export declare class User {
    id: number;
    username: string;
    password: string;
    orders: Order[];
    role: Role;
}
