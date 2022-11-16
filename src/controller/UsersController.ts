import { AppDataSource } from '../data-source';
import { Users } from '../entity/Users';

class UsersController {
  async getUsers() {
    const users = await AppDataSource.getRepository(Users)
      .find()
      .catch((err) => console.log(err));
    console.log(users);
    return users;
  }
}

const usersController = new UsersController();
export { usersController };
