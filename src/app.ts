import express, { Application, Request, Response, json } from 'express';
import dotenv, { DotenvConfigOutput } from 'dotenv';
import config from './config/config';
const app: express.Application = express();
const env_config: DotenvConfigOutput = dotenv.config();
const port = process.env.PORT || 5000;

//routes
import TestRouter from './routes/test.route';

//middleware
app.use(json());
app.use(TestRouter);

let serve = async () => {
    config.authenticate();
    config.sync({force: false})
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
}

serve();