import { User } from '../../../entity/Client';

export interface ProductDTO {
    name: string;
    price: string;
    link: string;
    user: User;
}
