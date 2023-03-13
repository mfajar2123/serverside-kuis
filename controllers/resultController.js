// const Result = require('../models/result.js');

// exports.getResults = async (req, res, next) => {
//   try {
//     const results = await Result.find();
//     res.status(200).json({
//       success: true,
//       data: results
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.createResult = async (req, res, next) => {
//   try {
//     const { name, score } = req.body;
//     const newResult = await Result.create({
//       name,
//       score
//     });
//     res.status(201).json({
//       success: true,
//       data: newResult
//     });
//   } catch (error) {
//     next(error);
//   }
// };


