var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];

  for (let i = 0; i < 40; i++) {
    models.push({
      ques_answer: faker.lorem.words().slice(0, 1000),

    });
  }

  return knex('questions').insert(models);
};
