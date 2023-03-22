import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import Poll from './models/Poll.js';

// Initialize express
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost/mongoose-watch')
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(8080, () => console.log('Server is running on localhost:8080'));
  });

// Create change stream
Poll.watch().on('change', (data) => {
  console.log(data);
});

// Get all polls
app.get('/poll', async (req, res) => {
  try {
    const poll = await Poll.find();

    res.status(200).json(poll);
  } catch (err) {
    res.status(200).json({ error: err });
  }
});

// Add poll
app.post('/poll/add', async (req, res) => {
  const response = await new Poll({
    name: req.body.name,
    options: req.body.options,
  });

  response
    .save()
    .catch((err) => console.error(err))
    .then((poll) => console.log(poll));

  res.status(200).json(response);
});

// Update poll
app.post('/poll/update', async (req, res) => {
  const pollId = req.body.id;
  const change = req.body.change;

  try {
    const response = await Poll.findOneAndUpdate({ _id: pollId }, change);
    if (response === null) throw 'An error occurred';
    res.status(200).json({ message: 'Update successful' });
  } catch (err) {
    res.status(200).json({ error: err });
  }
});

// Delete poll
app.delete('/poll/delete', async (req, res) => {
  try {
    const response = await Poll.findByIdAndDelete(req.body.id);

    if (response === null) {
      throw 'Poll could not be found. Deletion failed.';
    }

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
