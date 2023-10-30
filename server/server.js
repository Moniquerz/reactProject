require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection string
const dbURI = process.env.URI

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));



// Routes
const users = require('./routes/api/users');
const listings = require('./routes/api/listings');

app.use('/api/users', users);
app.use('/api/listings', listings);

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
