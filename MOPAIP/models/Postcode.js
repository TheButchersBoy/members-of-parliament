const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostcodeSchema = new Schema({
  postcode: {
    type: int,
    required: true
  },
  mpId: {
    type: int,
    required: true
  }
});

module.exports = User = mongoose.model('postcode', PostcodeSchema);
