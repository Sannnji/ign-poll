import express from 'express';
import mongoose, { Schema } from 'mongoose';

import Poll from './models/Poll.js';

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('MongoDB Connected'));

const app = express();

app.use(express.json());

app.get('/poll', async (req, res) => {
  const poll = await Poll.find();

  res.status(200).json(poll);
});

app.post('/poll/add', async (req, res) => {
  const newPoll = await new Poll({
    name: req.body.name,
    options: req.body.options,
  });

  newPoll
    .save()
    .catch((err) => console.error(err))
    .then((poll) => console.log(poll));

  res.status(200).json(newPoll);
});

app.post('/poll/update', async (req, res) => {
  const pollId = req.body.id;
  const change = req.body.change;

  try {
    await Poll.findOneAndUpdate(
      { _id: pollId },
      { options: [{ name: 'Leopard', count: 1 }] }
    );
  } catch (err) {
    res.status(200).json({ message: 'failed' });
    console.log(err);
  }

  // res.status(200).json()
  res.status(200).json({ message: 'Successfull' });
});

app.delete('/poll/delete', async (req, res) => {
  const newPoll = await Poll.findByIdAndDelete(req.body.id);

  if (newPoll == null) {
    console.log(null);
  }

  res.status(200).json(newPoll);
});

app.listen(8080, () => console.log('Server is running on localhost:8080'));
