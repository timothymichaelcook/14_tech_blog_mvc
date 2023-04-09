const { User } = require("../models");

const userData = [
  {
    username: "Mick",
    password: "mic12",
  },
  {
    username: "Melanie",
    password: "nie34",
  },
  {
    username: "Sean",
    password: "Se24",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
