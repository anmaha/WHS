const express = require("express");
const cors = require("cors");

const app = express();
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const parentRouter = require("./routes/maarRoute");

app.use("/project", parentRouter);

module.exports = app;