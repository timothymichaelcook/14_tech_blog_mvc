const { Post } = require("../models");

const postData = [
  {
    title: "What is MVC Framework?",
    content: "Model-View-Controller",
    user_id: 1,
  },
  {
    title: "What are the Templates Engines",
    content: "Placeholders for data that we wish to include",
    user_id: 2,
  },
  {
    title: "What is Handlebars.js?",
    content:
      "Handlebars.js is an extension of the templating language Mustache",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
