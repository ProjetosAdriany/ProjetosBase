import { Product } from '../entity/Driver';

export default interface IProductRepository {
    findAll(): Promise<Product[]>;
    findByName(name: string): Promise<Product[]>;
    save(data: Product): Promise<Product>;
    findByUserId(userId: number): Promise<Product[]>;
    delete(productId: number): void;
}
