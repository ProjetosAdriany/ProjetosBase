import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './Client';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: string;

    @Column()
    link: string;

    @ManyToOne((type) => User, (user) => user.products)
    user: User;

    constructor(props: Omit<Product, 'id' | 'users'>) {
        Object.assign(this, props);
    }
}
