var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];

  for (let i = 0; i < 20; i++) {
    models.push({
      full_name: faker.name.findName().slice(0, 255),
      sex: Math.random() >= 0.5 ? 'F' : 'M',
      age: parseInt(Math.random() * 100 + 1),
      phone: faker.phone.phoneNumber().slice(0, 100),
      code: `PATCOV#${i}${Date.now()}`
    });
  }

  return knex('headers').insert(models);
};
