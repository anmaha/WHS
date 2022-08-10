const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
//const crypto = require("crypto");

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  })
);

app.use(cookieParser());
app.use(
  expressSession({
    key: "artist",
    secret: "secret", //crypto.randomBytes(32).toString("hex"),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
    },
  })
);

//app.use(express.static(path.join(_dirname, "../client/build")));
const parentRouter = require("./routes/maarRoute");

app.use("/project", parentRouter);

module.exports = app;