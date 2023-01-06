import { Product } from '../../entity/Driver';
import IProductRepository from '../IDriversRepository';
import { getRepository, Like } from 'typeorm';

export class MysqlProductProvider implements IProductRepository {
    findAll(): Promise<Product[]> {
        const db = getRepository(Product);
        return db.find();
    }

    async findByUserId(userId: number): Promise<Product[]> {
        const db = await getRepository(Product);
        const products = await db.find({
            where: {
                user: userId,
            },
        });
        return products;
    }

    async findByName(name: string): Promise<Product[]> {
        const db = await getRepository(Product);
        const products = await db.find({
            name: Like(`%${name}%`),
        });
        return products;
    }

    save(product: Product): Promise<Product> {
        const db = getRepository(Product);
        return db.save(product);
    }

    delete(productId: number): void {
        const db = getRepository(Product);
        db.delete(productId);
    }
}
