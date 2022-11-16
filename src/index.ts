/* eslint-disable @typescript-eslint/no-explicit-any */
import * as bodyParser from 'body-parser';
import * as express from 'express';

import { AppDataSource } from './data-source';
import { routes } from './routes';

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log('Database conected');
  })
  .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use(routes);

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
