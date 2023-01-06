import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './Driver';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany((type) => Product, (products) => products.user)
    products: Product[];

    constructor(props: Omit<User, 'id' | 'products'>) {
        Object.assign(this, props);
    }
}
