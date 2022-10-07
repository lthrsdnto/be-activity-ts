import express, { Application, Request, Response, json } from 'express';
import dotenv, { DotenvConfigOutput } from 'dotenv';
import config from './config/config';
const app: express.Application = express();
const env_config: DotenvConfigOutput = dotenv.config();
const port = process.env.PORT || 5000;

//routes
import TestRouter from './routes/test.route';
import UserRouter from './routes/user.route';
import InfoRouter from './routes/info.route';
import TaskRouter from './routes/task.route';
import AccountRouter from './routes/account.route';

//middleware
app.use(json());
app.use(TestRouter);
app.use(UserRouter);
app.use(InfoRouter);
app.use(TaskRouter);
app.use(AccountRouter);

//authentication
config
  .authenticate()
  .then(() => {
    config.sync({ force: process.env.RESET == "true" ? true : false });
    console.log("Connected to Database!");
  })
  .catch((err) => {
    console.log(err);
  });


let serve = async () => {
    config.authenticate();
    config.sync({force: false})
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
}

serve();