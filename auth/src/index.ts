import express from 'express';
import { currentUserRouter } from './routes/current-user';
import { singInRouter } from './routes/signin';
import { singOutRotuer } from './routes/signout';
import { signUpRouter } from './routes/singup';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(singInRouter);
app.use(singOutRotuer);
app.use(signUpRouter);

app.listen(3000, () => {
  console.log('Listening on 3000');
});
