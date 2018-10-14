const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ElectoratesSchema = new Schema({
  elecID: {
    type: Int32Array,
    required: true
  },
  elecName: {
    type: String,
    required: true
  },
  positionID: {
    type: Int32Array,
    required: true
  }
});

module.exports = Electorates = mongoose.model("electorates", ElectoratesSchema);
