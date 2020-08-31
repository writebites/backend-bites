// Add post
// Get post by (post) id
// Edit post
// Delete post
// Find all posts by username

const db = require('../database/db-config');

module.exports = {
    add,
    getPostById
}

function add(post) {
    return db('posts').insert(post);
}

function getPostById(post_id) {
    return db('posts').where({ id: post_id }).first();
}



