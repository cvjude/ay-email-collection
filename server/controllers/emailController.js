import models from '../db/models';
import helpers from '../helpers';

const { successStat } = helpers;

/**
 * / @static
 * @description Allows a user to subscribe to the news letter
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} object containing user data and access Token
 * @memberof JobController
 */

export default async (req, res) => {
  const { email } = req.body;

  let subscriber = await models.User.findOne({
    where: { email },
  });

  if (!subscriber) {
    subscriber = await models.User.create(req.body);
  }
  return successStat(res, 201, 'message', 'Subscribed');
};
