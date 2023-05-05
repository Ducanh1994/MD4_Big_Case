import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "./user";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    role: string;
    @OneToMany(() => User,(user) => user.role)
    users: User[];

}