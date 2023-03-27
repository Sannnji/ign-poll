import mongoose, { Schema } from 'mongoose';

const PollSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  options: [
    {
      _id: false,
      name: {
        type: String,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
    },
  ],
});

export default mongoose.model('Poll', PollSchema);
