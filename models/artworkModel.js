const mongoose = require("mongoose");

const artworkModel = new mongoose.Schema({
  artist: { type: String },
  title: { type: String },
  date: { type: String },
  media: { type: String },
  size: { type: String },
  description: { type: String },
  image: { data: Buffer, contentType: String },
});

const Artwork = mongoose.model("Artworks", artworkModel);

module.export = Artwork;