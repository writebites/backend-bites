
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_about').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_about').insert([
        {user_id: 1, blurb: 'Learning to code!', location: 'Illinois', email: 'allie@allie.com', favorites: 'Brandon Sanderson, Jane Austen'},
        {user_id: 2, blurb: 'Funny and works hard', location: 'Florida', email: 'mashima@mashima.com', favorites: 'Disney'},
        {user_id: 3, blurb: 'Very extremely kind', location: 'Idk', email: 'chance@chance.com', favorites: 'Discord'}
      ]);
    });
};
