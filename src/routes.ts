import { Router, Request, Response } from 'express';

import { usersController } from './controller/UsersController';

const routes = Router();

routes.get('/', async (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' });
});

routes.get('/users', async (req: Request, res: Response) => {
  const users = await usersController.getUsers();

  return res.status(200).json(users);
});

export { routes };
