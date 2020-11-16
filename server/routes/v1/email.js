import express from 'express';
import 'express-async-errors';
import middlewares from '../middlewares';
import { email } from '../helpers/schema';
import emailController from '../controllers/emailController';

const { validate } = middlewares;

const emailRoute = express();

emailRoute.post('/', validate(email), emailController);

export default emailRoute;
