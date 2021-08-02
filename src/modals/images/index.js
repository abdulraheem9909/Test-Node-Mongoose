const mongoose = require("mongoose");
const { Schema, modal } = mongoose;

const imageSchema = new Schema({
  image:String
});
const imageModal = mongoose.model("Images", imageSchema);

module.exports = imageModal;