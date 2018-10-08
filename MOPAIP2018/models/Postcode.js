const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostcodeSchema = new Schema({
  postcode: {
    type: Number,
    required: true
  },
  mpId: {
    type: Number,
    required: true
  }
});

module.exports = User = mongoose.model('postcode', PostcodeSchema);
