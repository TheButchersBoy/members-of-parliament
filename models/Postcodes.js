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
    type: Number,
    required: true
  },
  suburbTotal: {
    type: Number,
    required: true
  },
  postcode: {
    type: Number,
    required: true
  },
  suburbs: {
    type: Array,
    required: true
  }
});

module.exports = User = mongoose.model("postcodes", PostcodeSchema);
