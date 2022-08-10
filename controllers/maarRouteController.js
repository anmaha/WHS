const fs = require("fs");

const { multi_upload } = require("../multerSetup");

const { Artist } = require("../models/artistModel");

exports.getAll = async (req, res) => {
  try {
    console.log(req.query);
    const artist = await Artist.findOne({ lastName: req.query.lastName });
    res.send(artist);
    // res.status(200).json({
    //   status: "success",
    //   data: { images: Artist.images },
    // });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.addArtwork = async (req, res) => {
  const img = fs.readFileSync(req.file.path);
  const encodedImage = Buffer.from(img, "base64");

  const artwork = {
    data: encodedImage,
    contentType: req.file.mimetype,
    ...req.body,
  };
  const artist = await Artist.findById(req.query.artistId);
  // const newArtworks = [...artist.images, artwork];
  artist.images.push(artwork);
  const updatedArtist = await Artist.findByIdAndUpdate(
    req.query.artistId,
    { images: artist.images },
    { new: true }
  );
  console.log("UpdatedArtist", updatedArtist);
  res.send(updatedArtist);
};

exports.updateExistingArtwork = async (req, res) => {
  let img = null;
  let encodedImage = null;
  let mimetype = null;

  const artist = Artist.findById(req.query.artistId);
  const artworkToEdit = artist.images[req.query.artworkIndex];

  if (req.file) {
    img = fs.readFileSync(req.file.path);
    encodedImage = Buffer.from(img, "base64");
    mimetype = req.file.mimetype;
  } else {
    encodedImage = artworkToEdit.data;
    mimetype = artworkToEdit.contentType;
  }

  const artwork = {
    data: encodedImage,
    contentType: req.file.mimetype,
    ...req.body,
  };

  const modifiedArtwork = { ...artworkToEdit, ...artwork };
  const newArtworks = [
    ...artist.images.slice(0, req.query.artworkIndex),
    modifiedArtwork,
    ...artist.images.slice(req.query.artworkIndex + 1),
  ];

  const updatedArtist = await Artist.findByIdAndUpdate(
    req.query.artistId,
    { images: newArtworks },
    { new: true }
  );

  res.send(updatedArtist);
};

exports.upload = async (req, res) => {
  //   console.log("body", req.body);
  //   console.log("file", req.file);
  //   console.log("query", req.query);

  const img = fs.readFileSync(req.file.path);
  const encodedImage = Buffer.from(img, "base64");
  console.log("Encoded Image", encodedImage);
  const encodedImageData = {
    data: encodedImage,
    contentType: req.file.mimetype,
  };
  const artist = await Artist.findById(req.query.artistId);
  const images = artist.images;
  images.push(encodedImageData);
  const updatedArtist = await Artist.findByIdAndUpdate(
    req.query.artistId,
    { images: images },
    { new: true }
  );
  res.send(updatedArtist);
};

exports.createNew = async (req, res) => {
  try {
    const newArtwork = await Artist.create(req.body);
    console.log("Create new function", req.body);

    res.status(201).json({
      status: "Create New Success",
      data: { newArtwork },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error create new",
      message: error.message,
    });
  }
  //   multi_upload(req, res, (error) => {
  //     console.log("files:", req.files);
  //   });

  //
};;

exports.getWun = async (req, res) => {
  try {
    const wunArtwork = Artist.findById(req.params.id);
    res.status(200).json({
      status: "getWun Success",
      data: { wunArtwork },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error getWun",
      message: error.message,
    });
  }
};

exports.updateWun = async (req, res) => {
  try {
    const wunArtwork = Artist.findByIdandUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "updateWun Success",
      data: { wunArtwork },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error getWun",
      message: error.message,
    });
  }
};

exports.deleteArtwork = async (req, res) => {
  try {
    let delData = await dataObject.findById(req.params.id);
    await dataObject.findByIdAndDelete(req.params.id);

    // res.redirect("/");
    response.status(200).json({
      status: "success",

      data: {
        deletedData: delData,
        message: "passed deleteObject Entry Deleted",
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "fail",
      data: {
        message: "Failed deleteObject",
      },
    });
  }
};
