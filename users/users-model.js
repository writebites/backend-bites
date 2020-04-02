const db = require('../database/db-config');

module.exports = {
    add
}

function add(user) {
    return db('user').insert(user);
}