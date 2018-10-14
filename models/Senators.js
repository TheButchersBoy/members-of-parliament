const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SenatorsSchema = new Schema({
  positionID: {
    type: Int32Array,
    required: true
  },
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
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = Senators = mongoose.model("senators", MpSchema);
