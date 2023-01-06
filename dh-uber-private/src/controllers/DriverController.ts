import { Request, Response } from 'express';

class ProductController {
    static index(req: Request, res: Response) {
        return res.status(200).json({ message: 'Product Controller' });
    }
    static store(req: Request, res: Response) {}
    static listProductByUserId(req: Request, res: Response) {}
    static delete(req: Request, res: Response) {}
}

export default ProductController;
