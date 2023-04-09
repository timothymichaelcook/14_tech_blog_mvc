const { User } = require("../models");

const userData = [
  {
    username: "tcook",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
