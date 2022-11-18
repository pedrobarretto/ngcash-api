import { AppDataSource } from '../data-source';
import { AccountsModel, UsersModel } from '../entity';
import { Users } from '../interfaces';
import { authApp } from './AuthController';

class UsersController {
  async getUsers() {
    const users = await AppDataSource.getRepository(UsersModel)
      .find()
      .then((user) =>
        user.map((x) => {
          return {
            username: x.username,
            id: x.id,
            accountId: x.accountId,
          };
        })
      )
      .catch((err) => console.log(err));

    return users;
  }

  async createUser(user: Users) {
    const hashedPassword = await authApp.hashPassword(user.password);

    const newUser: Users = {
      ...user,
      password: hashedPassword,
    };

    const account = await AppDataSource.getRepository(AccountsModel).save({
      balance: 100,
    });
    const res = await AppDataSource.getRepository(UsersModel).save({
      ...newUser,
      accountId: account.id,
    });

    return { id: res.id, username: res.username, accountId: res.accountId };
  }
}

const usersController = new UsersController();
export { usersController };
