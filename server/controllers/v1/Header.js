const Header = require("../../models/Header");
const Answer = require("../../models/Answer");

const Controller = require("../Controller");
const bookshelf = require("../../../database/config");

class HeaderController extends Controller {
  constructor() {
    super();
    this.model = Header;
  }

  insert(req, res, next) {
    let data = req.body;
    //Math.random().toString(36).slice(2)
    data.code = `PATCOV#${Math.random(Date.now()).toString(36).slice(10)}${Date.now()}`.toUpperCase();

    let dataAnswer = data.answer;
    delete data.answer;

    bookshelf
      .transaction((transaction) => {
        return new Header()
          .save(data, { method: "insert", transacting: transaction })
          .then((result) => {
            let dataValue = dataAnswer.map((element) => {
              element.header_id = result.id;
              return element;
            });

            let answerTransac = Answer.collection().add(dataValue, {
              transacting: transaction,
            });

            return {result, answerTransac}
          })
          .catch((error) => {
            throw error;
          });
      })
      .then(({result, answerTransac}) => {
        let obj = { headers: result}
        return answerTransac.invokeThen("save").then((result) => {
          obj.answer = result;
          res
            .status(200)
            .send({ 
              error: null, 
              result: obj, 
              success: true 
            });
        });
      })
      .catch((error) => {
        let details = this.getErrorDetails(error);
        res.status(400).send({ error: details, result: null, success: false });
      });
  }
}

module.exports = HeaderController;
