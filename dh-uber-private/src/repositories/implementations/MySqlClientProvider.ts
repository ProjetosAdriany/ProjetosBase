import { User } from '../../entity/Client';
import IUsersRepository from '../IClientsRepository';
import { getRepository, Repository } from 'typeorm';

export class MysqlProvider implements IUsersRepository {
    findAll(): Promise<User[]> {
        const db = getRepository(User);
        return db.find();
    }
    save(user: User): Promise<User> {
        const db = getRepository(User);
        return db.save(user);
    }
    async edit(id: number, user: User): Promise<User> {
        const db = getRepository(User);
        let userExits = await db.findOne(id);

        userExits = { ...userExits, ...user };

        return db.save(userExits);
    }
}
