import * as bcrypt from 'bcrypt';
import * as jsonwebtoken from 'jsonwebtoken';

import { Token } from '../interfaces';

class AuthApp {
  async hashPassword(password: string) {
    const hashedPassword = await bcrypt.hash(password, 12);
    return hashedPassword;
  }

  async isPasswordValid(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    const isValid = await bcrypt.compare(password, hashedPassword);

    if (isValid) return true;

    return false;
  }

  generateToken(id: number, username: string): Token {
    const token = jsonwebtoken.sign(
      {
        id,
        username,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: 86400000,
      }
    );

    return { token };
  }
}

const authApp = new AuthApp();
export { authApp };
