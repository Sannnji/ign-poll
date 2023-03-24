import mongoose, { Schema } from 'mongoose';

const PollListSchema = Schema([
  {
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
