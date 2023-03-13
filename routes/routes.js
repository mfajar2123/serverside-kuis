const express = require('express');
const router = express.Router();
const questionController = require('./../controllers/questionController.js');
const resultController = require('./../controllers/resultController.js');


router.get('/api/questions', questionController.getQuestions)
router.post('/api/questions', questionController.createQuestion)
// router.post('/api/results', resultController.createResult)
// router.get('/api/results',resultController.getResults)

module.exports = router;
