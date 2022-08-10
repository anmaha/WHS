const mongoose = require("mongoose");

const artworkModel = new mongoose.Schema({
  artist: {
    firstName: String,
    lastName: String,
  },
  title: { type: String },
  date: { type: String },
  media: { type: String },
  size: { type: String },
  description: { type: String },
  image: { data: Buffer, contentType: String },
});

const artist = new mongoose.Schema({
  userName: { type: String },
  password: { type: String },
  email: { type: String },
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
const Artist = mongoose.model("ArtistDB", artist);

//const Artwork = mongoose.model("Artwork", artworkModel);

module.exports = { Artist };