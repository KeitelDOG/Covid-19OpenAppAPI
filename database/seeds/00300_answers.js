var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];

  for (let i = 0; i < 200; i++) {
    models.push({
      header_id: parseInt(Math.random() * 20 + 1),
      question_id: parseInt(Math.random() * 40 + 1),
      ques_answer: faker.lorem.words().slice(0, 1000),

    });
  }

  return knex('answers').insert(models);
};
