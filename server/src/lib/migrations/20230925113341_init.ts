import * as Knex from "knex";

exports.up = function (knex: Knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id");
    table.string("imgSrc", 255).notNullable();
    table.string("text", 3000).notNullable();
    table.string("subtext", 3000).notNullable();
    table.integer("price").notNullable();
    table.integer("rating").notNullable();
    table.integer("discount").notNullable();
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable("products");
};
