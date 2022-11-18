import { Router, Request, Response } from 'express';

import { usersController } from '../controller/UsersController';
import { UsersMiddleware } from '../middlewares/UsersMiddleware';

const usersRoutes = Router();

usersRoutes.get('/', async (req: Request, res: Response) => {
  const users = await usersController.getUsers();

  return res.status(200).json(users);
});

usersRoutes.use(UsersMiddleware);

usersRoutes.post('/', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const users = await usersController.createUser({
    username,
    password,
  });

  return res.status(201).json(users);
});

export { usersRoutes };
