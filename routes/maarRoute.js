const express = require("express");

const projectRouter = express.Router();
const multer = require("multer");
const { upload } = require("../multerSetup");

const routeControl = require("../controllers/maarRouteController");

projectRouter.route("/").get(routeControl.getAll).post(routeControl.upload);

projectRouter.route("/create").post(routeControl.createNew);

projectRouter
  .route("/update")
  .put(upload.single("file"), routeControl.updateExistingArtwork);

projectRouter
  .route("/:id")
  .get(routeControl.getWun)
  .put(routeControl.updateWun)
  .delete(routeControl.deleteArtwork);

//projectRouter.route("/:id/delete").get(routeControl.deleteArtwork);

projectRouter
  .route("/upload")
  .post(upload.single("file"), routeControl.upload)
  .get((req, res) => {
    // const images = Image.find({});
    const image = Image.findById(req.query.id);

    res.send(
      `data:${image.contentType};base64,${Buffer.from(
        image.data,
        "base64"
      ).toString("base64")}`
    );
  });

module.exports = projectRouter;
