const Question = require('../models/question.js');

exports.getQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.status(200).json({
      success: true,
      data: questions
    });
  } catch (error) {
    next(error);
  }
};

exports.createQuestion = async (req, res, next) => {
  try {
    const { question, options, answer } = req.body;
    const newQuestion = await Question.create({
      question,
      options,
      answer
    });
    res.status(201).json({
      success: true,
      data: newQuestion
    });
  } catch (error) {
    next(error);
  }
};
