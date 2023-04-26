const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    level: {
      type: String,
    },
    type: {
      type: String,
    },
    experience: {
      type: String,
    },
    salary: {
      type: String,
    },
    address: {
      type: String,
    },
    vacancy: {
      type: Number,
    },
    dead_line: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    company_name: {
      type: String,
    },
    company_link: {
      type: String,
    },
    requiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
