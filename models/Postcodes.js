const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostcodesSchema = new Schema({
  postId: {
    type: Number,
    required: true
  },
  postcode: {
    type: Number,
    required: true
  },
  pcPop: {
    type: Int32Array,
    required: false
  },
  suburbTotal: {
    type: Int32Array,
    required: false
  },
  suburbs: {
    type: Array,
    required: true
  }
});

module.exports = Postcodes = mongoose.model("postcodes", PostcodesSchema);
