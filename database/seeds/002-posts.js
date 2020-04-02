exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .delete()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          user_id: "1",
          title: "This is Allie's Post Title",
          body:
            "This is Allie's body of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum lectus diam, ut gravida justo gravida at. Integer porta turpis eget porttitor sagittis. Cras venenatis dapibus eros, sit amet maximus lorem ullamcorper at. Nunc massa libero, tempor vitae ante vitae, vulputate fermentum lectus. Sed eleifend enim imperdiet tincidunt hendrerit. Nam lobortis velit quis tellus scelerisque, quis viverra felis sagittis. Praesent ac leo mauris. Proin pellentesque neque eros, ut vulputate nulla imperdiet nec. Quisque dapibus justo eu viverra sollicitudin. Phasellus porta finibus turpis, sed pellentesque lorem vehicula id. Morbi a hendrerit odio. Vivamus a aliquet nulla. Nullam ultricies malesuada magna, quis sagittis ligula dapibus ac. Nam sit amet fringilla quam. Maecenas felis augue, condimentum at ligula nec, consectetur mattis mi."
        },
        {
          id: 2,
          user_id: "2",
          title: "This is Mashima's Post Title",
          body:
            "This is Mashima's body of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum lectus diam, ut gravida justo gravida at. Integer porta turpis eget porttitor sagittis. Cras venenatis dapibus eros, sit amet maximus lorem ullamcorper at. Nunc massa libero, tempor vitae ante vitae, vulputate fermentum lectus. Sed eleifend enim imperdiet tincidunt hendrerit. Nam lobortis velit quis tellus scelerisque, quis viverra felis sagittis. Praesent ac leo mauris. Proin pellentesque neque eros, ut vulputate nulla imperdiet nec. Quisque dapibus justo eu viverra sollicitudin. Phasellus porta finibus turpis, sed pellentesque lorem vehicula id. Morbi a hendrerit odio. Vivamus a aliquet nulla. Nullam ultricies malesuada magna, quis sagittis ligula dapibus ac. Nam sit amet fringilla quam. Maecenas felis augue, condimentum at ligula nec, consectetur mattis mi."
        },
        {
          id: 3,
          user_id: "3",
          title: "This is Chance's Post Title",
          body:
            "This is Chance's body of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum lectus diam, ut gravida justo gravida at. Integer porta turpis eget porttitor sagittis. Cras venenatis dapibus eros, sit amet maximus lorem ullamcorper at. Nunc massa libero, tempor vitae ante vitae, vulputate fermentum lectus. Sed eleifend enim imperdiet tincidunt hendrerit. Nam lobortis velit quis tellus scelerisque, quis viverra felis sagittis. Praesent ac leo mauris. Proin pellentesque neque eros, ut vulputate nulla imperdiet nec. Quisque dapibus justo eu viverra sollicitudin. Phasellus porta finibus turpis, sed pellentesque lorem vehicula id. Morbi a hendrerit odio. Vivamus a aliquet nulla. Nullam ultricies malesuada magna, quis sagittis ligula dapibus ac. Nam sit amet fringilla quam. Maecenas felis augue, condimentum at ligula nec, consectetur mattis mi."
        }
      ]);
    });
};
