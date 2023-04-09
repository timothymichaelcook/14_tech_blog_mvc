const { Comment } = require('../models');

const commentData = [{
        comment_text: "What is MVC Framework?",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "What are the Cookies?",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "What is a template engine?",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;