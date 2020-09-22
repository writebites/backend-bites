// Edit post
// Delete post

const db = require('../database/db-config');

module.exports = {
    add,
    getPostById,
    getUserIdByUsername,
    getPostsByUserId
}

function add(post) {
    return db('posts').insert(post);
}

function getPostById(post_id) {
    return db('posts').where({ id: post_id }).first();
}

function getUserIdByUsername(input_username) {
    return db('users').where({ username: input_username }).first().select('id')
}

function getPostsByUserId(input_user_id) {
    return db('posts').where({ user_id: input_user_id })
}




