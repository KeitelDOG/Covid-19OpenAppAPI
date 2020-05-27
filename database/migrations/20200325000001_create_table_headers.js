
exports.up = function(knex, Promise) {
  return knex.schema.createTable('headers', function(table) {
    table.increments('id').primary();
    table.string('full_name', 255).notNullable().index();
    table.string('sex', 20).index();
    table.integer('age').index();
    table.string('code', 250).notNullable().index();
    table.string('phone', 100).index();

    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());

    table.unique('code');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('headers');
};
