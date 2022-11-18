import { NextFunction, Request, Response } from 'express';

import { AppDataSource } from '../data-source';
import { UsersModel } from '../entity';
import { isPasswordValid } from '../utils';

export async function UsersMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, password } = req.body;

  if (!username) {
    return res
      .status(404)
      .json({ status: 404, error: 'must-provide-username' });
  }

  if (username.length < 3) {
    return res
      .status(404)
      .json({ status: 404, error: 'username-must-have-3-characters' });
  }

  if (!isPasswordValid(password)) {
    return res.status(404).json({
      status: 404,
      error: 'password-must-need-8-characters-1-uppercase-and-1-number',
    });
  }

  const user = await AppDataSource.getRepository(UsersModel).findOne({
    select: ['username'],
    where: { username },
  });

  if (user) {
    return res.status(404).json({ status: 404, error: 'user-already-exists' });
  }

  return next();
}
