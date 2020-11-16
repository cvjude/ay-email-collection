import { v4 as uuid } from 'uuid';

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
    }
  );

  User.beforeCreate((user) => {
    user.id = uuid();
  });

  return User;
};
