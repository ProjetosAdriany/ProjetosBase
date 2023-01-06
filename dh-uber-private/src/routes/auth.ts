import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRoutes = Router();

authRoutes.get('/login', AuthController.login);
authRoutes.get('/logout', AuthController.logout);
authRoutes.get('/esqueci-senha', AuthController.forgotPassword);

export default authRoutes;
