exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.varchar("username", 50).notNullable().unique();
      tbl.varchar("password", 3000).notNullable();
    })
    .createTable("posts", (tbl) => {
      tbl.increments();
      tbl.varchar("title", 255).notNullable();
      tbl.varchar("body", 3000).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("critiques", (tbl) => {
      tbl.increments();
      tbl.integer("star_rating");
      tbl.varchar("body", 1000).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("post_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("posts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("users_about", (tbl) => {
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.varchar("blurb", 255);
      tbl.varchar("location", 255);
      tbl.varchar("email", 255);
      tbl.varchar("favorites", 255);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users_about")
    .dropTableIfExists("critiques")
    .dropTableIfExists("posts")
    .dropTableIfExists("users");
};
