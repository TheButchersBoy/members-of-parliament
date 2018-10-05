const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TopicSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('issue', TopicSchema);
