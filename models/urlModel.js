const mongoose = require("mongoose");
const shortId = require("shortid");

const urlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    required: [true, "need a real url"],
  },

  shortUrl: {
    type: String,
    required: [true, "need a short url"],
    default: shortId.generate,
  },
  count: {
    type: Number,
    required: [true, "need a default count"],
    default: 0,
  },
});

module.exports = mongoose.model("Url", urlSchema);
