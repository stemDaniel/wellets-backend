import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';
import '../../Containers';

import express from 'express';
import { errors as celebrateErrors } from 'celebrate';

import TypeORM from '../TypeORM';
import Jobs from '../Jobs';
import routes from './Routes/index.routes';
import HandleErrors from './Middlewares/HandleErrors';

const app = express();
const port = process.env.APP_PORT || 3333;
const typeORM = new TypeORM();
const jobs = new Jobs();
const handleErrors = new HandleErrors();

typeORM.run().then(() => {
  jobs.run();
});

app.use(express.json());
app.use(routes);
app.use(celebrateErrors());
app.use(handleErrors.on);

app.listen(port, () => {
  console.log(`\x1b[33mServer Running On Port ${port}\x1b[0m`);
});
