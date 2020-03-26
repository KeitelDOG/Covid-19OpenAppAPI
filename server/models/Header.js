const bookshelf = require('../../database/config');

var Header = bookshelf.Model.extend({
  tableName: 'headers',
  hasTimeStamps: true,
  answers() {
    return this.hasMany('Answer');
  },

});

module.exports = bookshelf.model('Header', Header);
