import models from '../database/models';
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

export const createNewUser = async (req, res) => {
  const { email } = req.body.email;

  let subscriber = await models.User.findOne({
    where: { email },
  });

  if (!subscriber) {
    subscriber = await models.User.create(req.body.email);
  }
  return successStat(res, 201, 'message', 'Subscribed');
};

/**
 * / @static Gets all email
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} object containing user data and access Token
 * @memberof JobController
 */

export const getUsers = async (req, res) => {
  let subscribers = await models.User.findAll();

  return successStat(res, 201, 'data', subscribers);
};
