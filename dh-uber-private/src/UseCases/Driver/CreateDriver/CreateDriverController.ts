import { Request, Response } from 'express';
import { ListProductsByUserIdCase } from './ListProductsByUserIdCase';

export class ListProductsByUserIdController {
    constructor(private listProductsByUserIdCase: ListProductsByUserIdCase) {}
    handle = async (req: Request, res: Response): Promise<Response> => {
        const userId = parseInt(req.params.id);
        try {
            const products = await this.listProductsByUserIdCase.execute(
                userId
            );
            return res.status(201).send(products);
        } catch (err) {
            return res.status(400).json({ details: err.message });
        }
    };
}
