const Artwork = require("../models/artworkModel");

exports.getAll = async (req, res) => {
    try {
    const Artworks = await Artwork.find();
    res.status(200).json({
        status: "success",
        message: { Artworks },
    });
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        });   
     }   
};

exports.createNew = async (req, res) => {
    try{
        const newArtwork = Artwork.create(req.body);

        res.status(201).json({
            status: "Create New Success",
            data: { newArtwork },
        });
    }catch(error){
        res.status(500).json({
            status: "Error create new",
            message: error.message,
        });
    }
};

exports.getWun = async (req, res) => {
    try{
        const wunArtwork = Artwork.findById(req.params.id);
        res.status(200).json({
            status: "getWun Success",
            data: { wunArtwork },

        });
    }catch(error){
        res.status(500).json({
            status: "Error getWun",
            message: error.message,
        })
    }

};