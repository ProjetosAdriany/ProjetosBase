import { Router } from 'express';
import { createUserController } from '../UseCases/User/CreateUser';
import { editUserController } from '../UseCases/User/EditUser';
import { listUserController } from '../UseCases/User/ListUsers';

const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.put('/:id', editUserController.handle);
userRoutes.get('/all', listUserController.handle);

export default userRoutes;
