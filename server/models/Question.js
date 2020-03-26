const bookshelf = require('../../database/config');

var Question = bookshelf.Model.extend({
  tableName: 'questions',
  hasTimeStamps: true,
  answers() {
    return this.hasMany('Answer');
  },

});

module.exports = bookshelf.model('Question', Question);
