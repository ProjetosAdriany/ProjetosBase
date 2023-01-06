import FakeUsersRepository from '@modules/users/repositories/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from '@modules/users/services/CreateUserService';
import AppError from '@shared/errors/AppError';

describe('CreateUser', () => {
    it('Should be able to create a new user', async () => {
        const fakeUserRespository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();
        const createUser = new CreateUserService(
            fakeUserRespository,
            fakeHashProvider
        );

        const user = await createUser.execute({
            name: 'Adriany',
            email: 'adrinyaires@gmail.com',
            password: '123123',
        });

        expect(user).toHaveProperty('name');
        expect(user.name).toBe('Adriany');
    });

    it('Should be able to create a two users on the same email', async () => {
        const fakeUserRespository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();
        const createUser = new CreateUserService(
            fakeUserRespository,
            fakeHashProvider
        );

        await createUser.execute({
            name: 'Adriany',
            email: 'adrinyaires@gmail.com.br',
            password: '123123',
        });

        expect(
            createUser.execute({
                name: 'Adriany',
                email: 'adrinyaires@gmail.com.br',
                password: '123123',
            })
        ).rejects.toBeInstanceOf(AppError);
    });
});
