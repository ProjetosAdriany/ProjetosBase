import { Request, Response } from 'express';

class IndexController {
    static index(req: Request, res: Response) {
        return res.status(200).json({ message: 'APi Rodando' });
    }
}

export default IndexController;
