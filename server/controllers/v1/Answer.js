const Answer = require('../../models/Answer');
const Controller = require('../Controller');

class AnswerController extends Controller {
  constructor() {
    super();
    this.model = Answer;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: ['header', 'question'],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: ['header', 'question'],
    };
    super.find(req, res, next);
  }

}

module.exports = AnswerController;
