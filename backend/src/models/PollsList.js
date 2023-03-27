import mongoose, { Schema } from 'mongoose';

const PollListSchema = Schema([
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
]);

export default mongoose.model('PollList', PollListSchema);
