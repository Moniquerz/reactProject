const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Replace with your MongoDB connection string
const db = 'YOUR_MONGODB_CONNECTION_STRING';  

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Route
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
