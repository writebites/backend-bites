const db = require('')

module.exports = {
    add
}

function add(user) {
    return db('user').insert(user);
}