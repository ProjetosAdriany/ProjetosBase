import { Request, Response } from 'express';

class AuthController {
    static login(req: Request, res: Response) {
        return res.status(200).json({ message: 'APi Rodando' });
    }

    static logout(req: Request, res: Response) {}

    static forgotPassword(req: Request, res: Response) {}
}

export default AuthController;
