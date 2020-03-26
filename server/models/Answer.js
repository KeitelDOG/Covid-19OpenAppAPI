const bookshelf = require('../../database/config');

var Answer = bookshelf.Model.extend({
  tableName: 'answers',
  hasTimeStamps: true,
  header() {
    return this.belongsTo('Header');
  },
  question() {
    return this.belongsTo('Question');
  },

});

module.exports = bookshelf.model('Answer', Answer);
