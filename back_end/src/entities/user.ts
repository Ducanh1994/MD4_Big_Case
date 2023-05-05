import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Order} from "./order";
import {Role} from "./role";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @OneToMany(() => Order,(order) => order.user)
    orders: Order[];
    @ManyToOne(() => Role,(role) => role.users)
    role: Role;

}