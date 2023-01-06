import { Request, Response } from 'express';

class UserController {
    static index(req: Request, res: Response) {
        return res.status(200).json({ message: 'User Controller' });
    }

    static store(req: Request, res: Response) {
        return res.status(200).json({ message: 'User Controller Store' });
    }

    static update(req: Request, res: Response) {}
}

export default UserController;
