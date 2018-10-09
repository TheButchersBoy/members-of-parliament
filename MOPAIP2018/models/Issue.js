const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IssueSchema = new Schema({
  title: {
    type: String,
    required: true
  },  
  description: {
    type: String,
    required: true
  },  
  topic: {
    type: String,
    required: true
  },
  billUrl: {
    type: String,
    required: true
  },
  votesFor: [],
  votesAgainst: [],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Issue = mongoose.model('issue', IssueSchema);
