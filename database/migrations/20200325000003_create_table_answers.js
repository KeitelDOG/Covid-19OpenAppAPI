
exports.up = function(knex, Promise) {
  return knex.schema.createTable('answers', function(table) {
    table.increments('id').primary();
    table.integer('header_id').unsigned();
    table.integer('question_id').unsigned();
    table.string('title', 1000).notNullable();
    table.integer('type');
    table.string('choice', 1000).notNullable();

    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());

    table.foreign('header_id').references('headers.id').onUpdate('CASCADE').onDelete('RESTRICT');
    table.foreign('question_id').references('questions.id').onUpdate('CASCADE').onDelete('RESTRICT');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('answers');
};
