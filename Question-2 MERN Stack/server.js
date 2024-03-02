const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the "User" collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a "User" model based on the schema
const User = mongoose.model('User', userSchema);

// Define a route to fetch all users from the database
app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the "User" collection
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
