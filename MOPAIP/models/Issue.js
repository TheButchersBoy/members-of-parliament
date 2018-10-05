const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IssueSchema = new Schema({
  id: {
    type: int,
    required: true
  },
  topicId: {
    type: int,
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
        type: int,
        required: true
      }
    }
  ],
  votesAgainst: [
    {
      mpId: {
        type: int,
        required: true
      }
    }
  ]
});

module.exports = User = mongoose.model('issue', IssueSchema);
