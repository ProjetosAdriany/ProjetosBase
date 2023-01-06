import { Request, Response } from 'express';
import { CreateUserCase } from './CreateUserCase';

export class CreateUserController {
    constructor(private createUserCase: CreateUserCase) {}
    handle = async (req: Request, res: Response): Promise<Response> => {
        const { name, email, password } = req.body;

        try {
            await this.createUserCase.execute({ name, email, password });
            return res.status(201).send();
        } catch (err) {
            return res.status(400).json({ details: err.message });
        }
    };
}
