import express from 'express';
import helpers from '../../helpers';
import email from './email';

const { successStat } = helpers;
const router = express();

router.get('/', (req, res) => {
  successStat(res, 200, 'message', `Welcome back`);
});

router.use('/email', email);

export default router;
