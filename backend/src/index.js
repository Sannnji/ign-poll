import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import Poll from './models/Poll.js';
import PollList from './models/PollsList.js';

// Initialize express
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017')
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(8080, () => console.log('Server is running on localhost:8080'));
  });

// Add test data to server
async function addTestData() {
  const sum = await Poll.findById('6421d86ad6ffa14511eff229').catch((err) =>
    console.log(err)
  );

  if (sum === null) {
    Poll.create({
      _id: '6421d86ad6ffa14511eff229',
      name: 'Who is the best manga villian',
      options: [
        {
          name: 'Madara',
          count: 1000,
        },
        {
          name: 'Sukuna',
          count: 666,
        },
        {
          name: 'Black Beard',
          count: 620,
        },
      ],
    });

    PollList.create({
      _id: '6421d86ad6ffa14511eff229',
      name: 'Who is the best manga villian',
      url: 'localhost:8080/polls/6421d86ad6ffa14511eff229',
    });
  }
}
addTestData();

// GET list of polls
app.get('/polls', async (req, res) => {
  try {
    const pollList = await PollList.find();

    res.status(200).json(pollList);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// GET single poll
app.get('/polls/:pollId', async (req, res) => {
  try {
    const response = await Poll.findById(req.params.pollId);

    if (response === null) throw 'An error occured. Could not GET poll.';

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// ADD poll && add it to poll list
app.post('/poll/add', async (req, res) => {
  const addPoll = await new Poll({
    _id: new mongoose.mongo.ObjectId(req.body._id),
    name: req.body.name,
    options: req.body.options,
  });

  const addPollToList = await new PollList({
    _id: addPoll._id.toString(),
    name: req.body.name,
    url: `localhost:8080/polls/${addPoll._id.toString()}`,
  });

  // Validate before save
  try {
    const error = addPoll.validateSync();

    if (error) {
      const errorArr = Object.getOwnPropertyNames(error.errors);
      const numOfErrors = Object.getOwnPropertyNames(error.errors).length;
      let missingFields = '';

      for (let i = 0; i < numOfErrors; i++) {
        missingFields += errorArr[i] + ' ';
      }

      throw `Fields ${errorArr} are required`;
    }

    addPoll.save();
    addPollToList.save();

    res.status(200).json({ message: 'Poll successfully added', poll: addPoll });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// Update poll
app.post('/poll/update', async (req, res) => {
  const pollId = req.body.id;
  const change = req.body.change;
  const changeType = Object.getOwnPropertyNames(change)[0];

  try {
    const findPollById = await Poll.findById(pollId);
    const findPollListById = await PollList.findById(pollId);

    // Throw error if query returns null
    if (findPollById === null && findPollListById === null) {
      throw 'Update failed. Poll could not be found.';
    } else {
      // If updating name, update name in poll and poll list
      if (changeType === 'name') {
        await Poll.findByIdAndUpdate(pollId, change);
        await PollList.findByIdAndUpdate(pollId, change);
        // Increment Vote by 1
      } else if (changeType === 'vote') {
        await Poll.findOneAndUpdate(
          { _id: pollId, 'options.name': change.vote.for },
          { $inc: { 'options.$.count': 1 } }
        );
      } else {
        await Poll.findOneAndUpdate({ _id: pollId }, change);
      }
    }

    res.status(200).json({ message: 'Update successful' });
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

// Delete poll
app.delete('/poll/delete', async (req, res) => {
  try {
    const findPollAndDelete = await Poll.findByIdAndDelete(req.body.id);
    const findPollInListAndDelete = await PollList.findByIdAndDelete(
      req.body.id
    );

    if (findPollInListAndDelete === null || findPollAndDelete === null)
      throw 'Deletion failed. Poll could not be found.';

    res.status(200).json({ message: 'Delete successful' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
