import express from 'express';
import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';
import { signUpRouter } from './routes/singup';
import { json } from 'body-parser';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
app.use(errorHandler);
app.all('*', () => {
  throw new NotFoundError();
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
