import { v4 as uuid } from 'uuid';
import helpers from '../../helpers';

const { hashPassword } = helpers;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {
      getterMethods: {
        uuid_slug() {
          return uuid();
        },
      },
      hooks: {
        beforeCreate: async (user) => {
          user.password = await hashPassword(user.password);
        },
      },
    }
  );

  User.beforeCreate((user) => {
    user.id = uuid();
  });

  return User;
};
