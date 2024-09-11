const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  bio: { type: String },
  created_at: { type: Date, default: Date.now },
  supporters_count: { type: Number, default: 0 },
  supporting_count: { type: Number, default: 0 },
  tweets: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
  supporters: [{ type: Schema.Types.ObjectId, ref: 'People' }],
  supporting: [{ type: Schema.Types.ObjectId, ref: 'People'}]
});

module.exports = mongoose.model('User', userSchema);
