const mongoose = require("mongoose");

const artist = new mongoose.Schema({
  userName: { type: String },
  password: { type: String },
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  images: {
    type: Array,
    // default: [
    //   {
    //     data: Buffer,
    //     contentType: String,
    //     media: String,
    //     size: String,
    //     title: String,
    //     date: String,
    //     description: String,
    //   },
    // ],
  },
});
const Artist = mongoose.model("Artist", artist);

module.exports = { Artist };