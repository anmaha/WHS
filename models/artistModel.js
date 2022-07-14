const mongoose = require("mongoose");

// const artworkModel = new mongoose.Schema({
//   artist: { type: String },
//   title: { type: String },
//   date: { type: String },
//   media: { type: String },
//   size: { type: String },
//   description: { type: String },
//   //image: { data: Buffer, contentType: String },
// });

const artist = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  images: {
    type: Array,
    default: [
      {
        data: Buffer,
        contentType: String,
        media: String,
        size: String,
        title: String,
        date: String,
        description: String,
      },
    ],
  },
});
const Artist = mongoose.model("Artist", artist);

module.exports = Artist;