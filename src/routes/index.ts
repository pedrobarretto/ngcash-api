import { Router } from 'express';

import { usersRoutes } from './routes';

const routes = Router();

routes.use('/users', usersRoutes);

export { routes };
