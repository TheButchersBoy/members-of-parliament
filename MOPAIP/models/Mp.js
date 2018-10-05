const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MpSchema = new Schema({
  id: {
    type: int,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  party: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('mp', MpSchema);
