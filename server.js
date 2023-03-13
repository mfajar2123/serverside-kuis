const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mfajar2123:Kosongdelapan08@cluster0.f0hj8bx.mongodb.net/db_quiz?retryWrites=true&w=majority' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
