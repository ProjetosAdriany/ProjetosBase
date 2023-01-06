import { injectable, inject } from 'tsyringe';
import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

interface IRequestDTO {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository,

        @inject('hashProvider')
        private hashedProvider: IHashProvider
    ) {}

    async execute({ name, email, password }: IRequestDTO): Promise<User> {
        const checkUserExist = await this.userRepository.findByEmail(email);

        if (checkUserExist) {
            throw new AppError('Email address already used.');
        }

        const hashPassward = await this.hashedProvider.generateHash(password);
        const user = await this.userRepository.create({
            name,
            email,
            password: hashPassward,
        });

        return user;
    }
}

export default CreateUserService;
