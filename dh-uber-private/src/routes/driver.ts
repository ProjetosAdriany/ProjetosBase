import { Router } from 'express';
import { listProductsController } from '../UseCases/Product/ListProducts';
import { favoriteProductController } from '../UseCases/Product/FavoriteProduct';
import { listProductsByUserIdController } from '../UseCases/Product/ListProductsByUserId';
import { deleteProductController } from '../UseCases/Product/DeleteProduct';

const productRoutes = Router();

productRoutes.get('/:name', listProductsController.handle);
productRoutes.post('/favorite', favoriteProductController.handle);
productRoutes.get('/listByUser/:id', listProductsByUserIdController.handle);
productRoutes.delete('/:id', deleteProductController.handle);

export default productRoutes;
