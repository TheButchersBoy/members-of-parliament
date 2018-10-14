const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SuburbsSchema = new Schema({
  suburbId: {
    type: Int32Array,
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
    type: Int32Array,
    required: false
  },
  suburbTotal: {
    type: Int32Array,
    required: false
  },
  suburbInstance: {
    type: Int32Array,
    required: false
  },
  postcode: {
    type: Int32Array,
    required: true
  },
  altPostcode: {
    type: Int32Array,
    required: false
  },
  elecID1: {
    type: Int32Array,
    required: true
  },
  electName1: {
    type: String,
    required: true
  },
  elecID2: {
    type: Int32Array,
    required: false
  },
  electName2: {
    type: String,
    required: false
  }
});

module.exports = Suburbs = mongoose.model("suburbs", SuburbsSchema);
