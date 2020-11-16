import express from 'express';
import 'express-async-errors';
import middlewares from '../../middlewares';
import { createNewUser, getUsers } from '../../controllers/emailController';

const { validate, createUser } = middlewares;

const emailRoute = express();

emailRoute.post('/', validate(createUser), createNewUser);
emailRoute.get('/', getUsers);

export default emailRoute;
