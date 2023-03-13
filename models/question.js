const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{
    option: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
  }],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
