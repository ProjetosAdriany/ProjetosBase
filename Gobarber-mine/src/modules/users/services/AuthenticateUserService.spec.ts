import FakeUserRepository from '@modules/users/repositories/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import CreateUserService from '@modules/users/services/CreateUserService';
import AppError from '@shared/errors/AppError';

describe('AuthenticateUser', () => {
    it('should be able to authenticate success', async () => {
        const fakeUserRepository = new FakeUserRepository();
        const fakeHashProvider = new FakeHashProvider();
        const createUser = new CreateUserService(
            fakeUserRepository,
            fakeHashProvider
        );
        const authenticateUser = new AuthenticateUserService(
            fakeUserRepository,
            fakeHashProvider
        );

        const user = await createUser.execute({
            name: 'Adriany',
            email: 'adrinyaires@gmail.com',
            password: '123456',
        });

        const response = await authenticateUser.execute({
            email: 'adrinyaires@gmail.com',
            password: '123456',
        });

        expect(response).toHaveProperty('token');
        expect(response.user).toEqual(user);
    });

    it('Should not be able to authenticate from user non exist', async () => {
        const fakeUserRepository = new FakeUserRepository();
        const fakeHashProvider = new FakeHashProvider();

        const authenticateUser = new AuthenticateUserService(
            fakeUserRepository,
            fakeHashProvider
        );

        expect(
            authenticateUser.execute({
                email: 'adrinyaires@gmail.com.br',
                password: '123456',
            })
        ).rejects.toBeInstanceOf(AppError);
    });

    it('Should not be able to authenticate from Password incorrect', async () => {
        const fakeUserRepository = new FakeUserRepository();
        const fakeHashProvider = new FakeHashProvider();
        const createUser = new CreateUserService(
            fakeUserRepository,
            fakeHashProvider
        );
        const authenticateUser = new AuthenticateUserService(
            fakeUserRepository,
            fakeHashProvider
        );

        await createUser.execute({
            name: 'Adriany',
            email: 'adrinyaires@gmail.com',
            password: '123456',
        });

        expect(
            authenticateUser.execute({
                email: 'adrinyaires@gmail.com',
                password: 'wrong-password',
            })
        ).rejects.toBeInstanceOf(AppError);
    });
});
