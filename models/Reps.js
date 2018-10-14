const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RepsSchema = new Schema({
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
  division: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = Reps = mongoose.model("reps", MpSchema);
