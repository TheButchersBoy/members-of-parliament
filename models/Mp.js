const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MpSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },  
  lastName: {
    type: String,
    required: true
  },
  party: {
    type: String,
    required: true
  }
});

module.exports = Mp = mongoose.model('mp', MpSchema);
