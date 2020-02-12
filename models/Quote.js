const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const QuoteSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  addDate: {
    type: Date,
    default: Date.now
  },
  addBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});
module.exports = Quote = mongoose.model("quotes", QuoteSchema);