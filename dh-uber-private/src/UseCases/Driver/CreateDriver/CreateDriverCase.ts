import IProductRepository from '../../../repositories/IDriversRepository';

export class ListProductsByUserIdCase {
    constructor(private productRepository: IProductRepository) {}

    async execute(userId: number) {
        const products = await this.productRepository.findByUserId(userId);
        return products;
    }
}
