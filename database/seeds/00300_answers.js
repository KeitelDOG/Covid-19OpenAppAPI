var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];

  for (let i = 0; i < 200; i++) {
    models.push({
      header_id: parseInt(Math.random() * 20 + 1),
      question_id: parseInt(Math.random() * 40 + 1),
      title: faker.lorem.sentence().slice(0, 200),
      type: parseInt(Math.random() * 4 + 1),
      choice: faker.lorem.words().slice(0, 400),

    });
  }

  return knex('answers').insert(models);
};
