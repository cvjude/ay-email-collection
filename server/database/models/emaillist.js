import { v4 as uuid } from 'uuid';

module.exports = (sequelize, DataTypes) => {
  const EmailList = sequelize.define(
    'EmailList',
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

  EmailList.beforeCreate((user) => {
    user.id = uuid();
  });

  return EmailList;
};
