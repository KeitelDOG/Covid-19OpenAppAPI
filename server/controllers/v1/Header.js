const Header = require('../../models/Header');
const Controller = require('../Controller');

class HeaderController extends Controller {
  constructor() {
    super();
    this.model = Header;
  }


}

module.exports = HeaderController;
