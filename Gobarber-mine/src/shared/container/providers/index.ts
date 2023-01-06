import { container } from 'tsyringe';
import IStoreProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStoreProvider>(
    'StorageProvider',
    DiskStorageProvider
);
