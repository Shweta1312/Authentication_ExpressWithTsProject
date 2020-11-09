import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

import {router as controllerRouter} from './controllers/decorators/controller';
import './controllers/LoginController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieSession({keys: ['asdfgh']}));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log('Listeninig on port 3000');
});
