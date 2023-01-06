import { User } from '../entity/Client';

export default interface IUsersRepository {
    findAll(): Promise<User[]>;
    save(user: User): Promise<User>;
    edit(id: number, user: User): Promise<User>;
}
