import { User } from '../../../entity/Client';
import IUserRepository from '../../../repositories/IClientsRepository';
import { UserDTO } from '../UserDTO/UserDTO';

export class CreateUserCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute(data: UserDTO) {
        const user = new User(data);
        await this.usersRepository.save(user);
    }
}
