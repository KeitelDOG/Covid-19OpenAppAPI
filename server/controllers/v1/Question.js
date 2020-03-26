const Question = require('../../models/Question');
const Controller = require('../Controller');

class QuestionController extends Controller {
  constructor() {
    super();
    this.model = Question;
  }


}

module.exports = QuestionController;
