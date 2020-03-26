
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', function(table) {
    table.increments('id').primary();
    table.string('ques_answer', 1000).notNullable().index();

    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions');
};
