const express = require("express");
const fs = require("fs");

const projectRouter = express.Router();

const upload = require("../multerSetup");

const routeControl = require("../controllers/maarRouteController");

const getIndex = (req, res) =>{
    res.send("INdex")
}
projectRouter
    .route("/")
    .get(getIndex);

projectRouter
    .route("/upload")
    .post(upload.single("file"), async(req, res) => {
      const img = fs.readFileSync(req.file.path);
        const encodedImage = Buffer.from(img, 'base64');
        console.log("Encoded Image", encodedImage);
        const encodedImageData = {
            data: encodedImage,
            contentType: req.file.mimetype,
        };
        const response = await User.findByIdAndUpdate(req.query.userId, { avatar: encodedImageData }, { new: true });
        res.send(response);
        
        //res.send(req.file);
    })
    .get((req, res)=> {
       // const images = Image.find({});
        const image = Image.findById(req.query.id);

        res.send(`data:${image.contentType};base64,${Buffer.from(image.data, "base64").toString("base64")}`);
    });

module.exports = projectRouter;