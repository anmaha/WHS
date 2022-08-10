const bcrypt = require("bcrypt");
const { Artist } = require("../models/artistModel");

const loginUser = async (req, res) => {
  const artist = await Artist.findOne({ email: req.body.email });
  if (!artist) {
    res.status(401).send("Invalid Email or Password!");
    return;
  } else {
    const isMatch = bcrypt.compareSync(req.body.password, artist.password);
    if (isMatch) {
      req.session.user = artist;
      artist.isLoggedIn = true;
      await artist.save();
      res.send(artist);
    } else {
      res.status(401).send("Invalid Email or Password!");
    }
  }
};

const logoutUser = async (req, res) => {
  req.session.destroy();
  const artist = await Artist.findByIdAndUpdate(
    req.query.artistId,
    { isLoggedIn: false },
    { new: true }
  );
  res.send(artist);
};

const signupUser = async (req, res) => {
  console.log(req.body);
  const artist = await Artist.findOne({ email: req.body.email });
  if (artist) {
    res.status(401).send("User already exists");
    return;
  } else {
    const salt = await bcrypt.genSalt(10);

    const createdArtist = {
      ...req.body,
      password: await bcrypt.hash(req.body.password, salt),
    };
    const newArtist = await Artist.create(createdArtist);
    res.send(newArtist);
  }
};

const getLoggedInUser = (req, res) => {
  if (req.session.user) {
    res.send(req.session.user);
  } else {
    res.status(401).send("User not logged in!");
  }
};

module.exports = {
  loginUser,
  logoutUser,
  signupUser,
  getLoggedInUser,
};
