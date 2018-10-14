const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SuburbsSchema = new Schema({
  suburbId: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  suburbName: {
    type: String,
    required: true
  },
  suburbPopulation: {
    type: Number,
    required: false
  },
  suburbTotal: {
    type: Number,
    required: false
  },
  suburbInstance: {
    type: Number,
    required: false
  },
  postcode: {
    type: Number,
    required: true
  },
  altPostcode: {
    type: Number,
    required: false
  },
  elecID1: {
    type: Number,
    required: true
  },
  electName1: {
    type: String,
    required: true
  },
  elecID2: {
    type: Number,
    required: false
  },
  electName2: {
    type: String,
    required: false
  }
});

module.exports = Suburbs = mongoose.model("suburbs", MpSchema);
