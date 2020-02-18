
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'allie', password: '000000'},
        {id: 2, username: 'mashima', password: '111111'},
        {id: 3, username: 'chance', password: '222222'}
      ]);
    });
};
