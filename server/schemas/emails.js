const mongoose = require("mongoose");
const emails = new mongoose.Schema({
  email: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Emails", emails);
