const mongoose = require("mongoose");
const { Schema, modal } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  gender: String,
  feesPaid: Boolean,
  images:String
});
const userModal = mongoose.model("User", userSchema);

module.exports = userModal;
