import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { AccountsModel, TransactionsModel, UsersModel } from './entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pedrobarretto',
  password: 'Senha123',
  database: 'ngcash',
  synchronize: true,
  logging: false,
  entities: [AccountsModel, TransactionsModel, UsersModel],
  migrations: [],
  subscribers: [],
});
