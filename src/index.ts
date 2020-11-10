import bodyParser from 'body-parser';
import express from 'express';
import { AppRouter } from './AppRouter';
import cookieSession from 'cookie-session';

import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdfgh'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listeninig on port 3000');
});
