import { MysqlProductProvider } from '../../../repositories/implementations/MySqlDriverProvider';
import { ListProductsByUserIdCase } from './ListProductsByUserIdCase';
import { ListProductsByUserIdController } from './ListProductsByUserIdController';

const mysqlProductProvider = new MysqlProductProvider();
const listProductsByUserIdCase = new ListProductsByUserIdCase(
    mysqlProductProvider
);
const listProductsByUserIdController = new ListProductsByUserIdController(
    listProductsByUserIdCase
);

export { listProductsByUserIdController };
