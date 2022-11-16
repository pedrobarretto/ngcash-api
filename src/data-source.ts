import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Accounts } from './entity/Accounts';
import { Transactions } from './entity/Transactions';
import { Users } from './entity/Users';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pedrobarretto',
  password: 'Senha123',
  database: 'ngcash',
  synchronize: true,
  logging: false,
  entities: [Users, Accounts, Transactions],
  migrations: [],
  subscribers: [],
});
