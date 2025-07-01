const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');
const app = express();
const reviewRoutes = require('./routes/reviews');
const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://krishnaonlinetutorials:qwerty123456789@cluster0.jwtby.mongodb.net/sample_airbnb?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB using Mongoose'))
    .catch(err => console.error('Error connecting to MongoDB:', err.message));

app.use('/reviews', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
