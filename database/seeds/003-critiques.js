exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("critiques")
    .delete()
    .then(function() {
      // Inserts seed entries
      return knex("critiques").insert([
        {
          id: 1,
          post_id: "1",
          user_id: "2",
          star_rating: "3",
          body: "Post 1 critiqued by User 2"
        },
        {
          id: 2,
          post_id: "2",
          user_id: "1",
          star_rating: "5",
          body: "Post 2 critiqued by User 1"
        },
        {
          id: 3,
          post_id: "3",
          user_id: "1",
          star_rating: "4",
          body: "Post 3 critiqued by User 1"
        }
      ]);
    });
};
