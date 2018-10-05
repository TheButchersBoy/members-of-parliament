const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IssueSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  topicId: {
    type: Number,
    required: true
  }
  title: {
    type: String,
    required: true
  },  
  description: {
    type: String,
    required: true
  },
  votesFor: [
    {
      mpId: {
        type: Number,
        required: true
      }
    }
  ],
  votesAgainst: [
    {
      mpId: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = User = mongoose.model('issue', IssueSchema);
