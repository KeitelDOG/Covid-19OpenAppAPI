var express = require('express');
var router = express.Router();
const multer = require('multer');

// token authorization
const { verifyToken } = require('../../../middlewares/authorization');

// Declare Controllers
// Auth Controller
//const Auth = require('../../../controllers/v1/Auth');
// Other Controllers
const HeaderController = require('../../../controllers/v1/Header');
const QuestionController = require('../../../controllers/v1/Question');
const AnswerController = require('../../../controllers/v1/Answer');


// Instanciate Controllers
const header = new HeaderController();
const question = new QuestionController();
const answer = new AnswerController();


router.get('/', function(req, res) {
  console.log('Open App API v1');
  res
    .status(200)
    .send({ status: 'Success', api: 'Version 1' })
});

// endpoint for authentication
//router.post('/signup', Auth.signup);
//router.post('/signin', Auth.signin);

// endpoint for headers (CRUD)
router.get('/headers', verifyToken, header.all.bind(header));
router.get('/headers/:id', verifyToken, header.find.bind(header));
router.post('/headers', verifyToken, header.insert.bind(header));
router.put('/headers/:id', verifyToken, header.update.bind(header));
router.delete('/headers/:id', verifyToken, header.delete.bind(header));

// endpoint for questions (CRUD)
router.get('/questions', verifyToken, question.all.bind(question));
router.get('/questions/:id', verifyToken, question.find.bind(question));
router.post('/questions', verifyToken, question.insert.bind(question));
router.put('/questions/:id', verifyToken, question.update.bind(question));
router.delete('/questions/:id', verifyToken, question.delete.bind(question));

// endpoint for answers (CRUD)
router.get('/answers', verifyToken, answer.all.bind(answer));
router.get('/answers/:id', verifyToken, answer.find.bind(answer));
router.post('/answers', verifyToken, answer.insert.bind(answer));
router.put('/answers/:id', verifyToken, answer.update.bind(answer));
router.delete('/answers/:id', verifyToken, answer.delete.bind(answer));


module.exports = router;
