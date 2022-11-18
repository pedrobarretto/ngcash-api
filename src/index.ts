/* eslint-disable @typescript-eslint/no-explicit-any */
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';

import { AppDataSource } from './data-source';
import { routes } from './routes';

dotenv.config();

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log('Database conected');
  })
  .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
