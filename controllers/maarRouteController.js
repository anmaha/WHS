const fs = require("fs");

const { multi_upload } = require("../multerSetup");

const { Artist } = require("../models/artistModel");

exports.getAll = async (req, res) => {
  try {
    const artists = await Artist.find({});
    res.send(artists);
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

exports.upload = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  //   const img = fs.readFileSync(req.file.path);
  //   const encodedImage = Buffer.from(img, "base64");
  //   console.log("Encoded Image", encodedImage);
  //   const encodedImageData = {
  //     data: encodedImage,
  //     contentType: req.file.mimetype,
  //   };
  //   const response = await Artist.findByIdandUpdate(
  //     req.query.userId,
  //     { image: encodedImageData },
  //     { new: true }
  //   );
  //   res.send(response);
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
