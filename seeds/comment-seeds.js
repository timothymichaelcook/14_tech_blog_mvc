const { Comment } = require('../models');

const commentData = [{
        comment_text: "What is MVC Framework?",
        user_id: 1,
        post_id: 1
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;