const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim : true
    },
    age: {
      type: Number,  // if take manths also then use "Double"
      required: true,
      trim : true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
