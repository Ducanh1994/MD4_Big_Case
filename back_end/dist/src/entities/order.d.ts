import { OrderDetail } from "./orderDetail";
import { User } from "./user";
export declare class Order {
    id: number;
    status: boolean;
    date: number;
    totalMoney: number;
    orderDetails: OrderDetail[];
    user: User;
}
