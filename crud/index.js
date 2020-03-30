module.exports = {
  package: 'Covid-19OpenAppAPI',
  app: 'Open App',
  description: 'Express Server used as API for the Covid-19OpenApp application',
  author: 'KeitelDOG',
  repos: 'https://github.com/KeitelDOG/Covid-19OpenAppAPI.git',
  entities: [
    {
      name: 'Header',
      plural: 'Headers',
      seedAmount: 20,
      fields: [
        {
          name: 'full_name',
          type: 'string',
          nullable: false,
          index: true,
          faker: 'name.findName',
        },
        {
          name: 'sex',
          type: 'string',
          length: 20,
          index: true,
          faker: 'lorem.word',
        },
        {
          name: 'age',
          type: 'integer',
          length: 3,
          index: true,
          faker: 'random.number',
        },
        {
          name: 'phone',
          type: 'string',
          length: 100,
          index: true,
          faker: 'phone.phoneNumber',
        },
      ],
      relations: {
        hasMany: ['Answer'],
      }
    },
    {
      name: 'Question',
      plural: 'Questions',
      seedAmount: 40,
      fields: [
        {
          name: 'title',
          type: 'string',
          length: 1000,
          nullable: false,
          faker: 'lorem.sentence',
        },
        {
          name: 'type',
          type: 'integer',
          faker: 'random.number',
        },
        {
          name: 'choice',
          type: 'string',
          length: 1000,
          nullable: false,
          faker: 'lorem.words',
        },
      ],
      relations: {
        hasMany: ['Answer'],
      }
    },
    {
      name: 'Answer',
      plural: 'Answers',
      seedAmount: 200,
      fields: [
        {
          name: 'ques_answer',
          type: 'string',
          length: 1000,
          nullable: false,
          index: true,
          faker: 'lorem.words',
        },
      ],
      relations: {
        belongsTo: ['Header', 'Question'],
      }
    },
  ]
};
