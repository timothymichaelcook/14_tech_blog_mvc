const { Post } = require("../models");

const postData = [
  {
    title: "What is MVC Framework?",
    content: "Model-View-Controller",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
