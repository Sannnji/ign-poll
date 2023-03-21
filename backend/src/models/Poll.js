import mongoose, { Schema } from 'mongoose';

const PollSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  options: [
    {
      name: String,
      count: Number,
    },
  ],
});

export default mongoose.model('Poll', PollSchema);
