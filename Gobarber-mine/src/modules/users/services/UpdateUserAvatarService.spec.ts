import FakeStorageProvider from '@shared/container/providers/fakes/FakeStorageProvider';
import FakeUsersRepository from '@modules/users/repositories/FakeUsersRepository';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import AppError from '@shared/errors/AppError';
import { isThisHour } from 'date-fns';

describe('UpdateUserAvatar', () => {
    it('Should be able to update avatar', async () => {
        const fakeUserRespository = new FakeUsersRepository();
        const fakeStorageProvider = new FakeStorageProvider();

        const updateUserAvatar = new UpdateUserAvatarService(
            fakeUserRespository,
            fakeStorageProvider
        );

        const user = await fakeUserRespository.create({
            name: 'Adriany Aires',
            email: 'adrinyaires@gmail.com',
            password: '123456',
        });

        await updateUserAvatar.execute({
            user_id: user.id,
            avatarFileName: 'avatar.jpg',
        });

        expect(user.avatar).toBe('avatar.jpg');
    });

    it('Should not be able to update avatar from non existing user', async () => {
        const fakeUserRespository = new FakeUsersRepository();
        const fakeStorageProvider = new FakeStorageProvider();

        const updateUserAvatar = new UpdateUserAvatarService(
            fakeUserRespository,
            fakeStorageProvider
        );

        expect(
            updateUserAvatar.execute({
                user_id: 'non-existing-avatar',
                avatarFileName: 'avatar.jpg',
            })
        ).rejects.toBeInstanceOf(AppError);
    });

    it('Should delete old avatar when updating new one', async () => {
        const fakeUserRespository = new FakeUsersRepository();
        const fakeStorageProvider = new FakeStorageProvider();

        const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

        const updateUserAvatar = new UpdateUserAvatarService(
            fakeUserRespository,
            fakeStorageProvider
        );

        const user = await fakeUserRespository.create({
            name: 'Adriany',
            email: 'adrinyaires@gmail.com',
            password: '123456',
        });

        await updateUserAvatar.execute({
            user_id: user.id,
            avatarFileName: 'avatar.jpg',
        });

        await updateUserAvatar.execute({
            user_id: user.id,
            avatarFileName: 'avatar2.jpg',
        });

        expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');

        expect(user.avatar).toBe('avatar2.jpg');
    });
});
