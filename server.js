require("dotenv").config();

const app = require("./app");

//mongoose connect to db and model
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(()=>{
        console.log("Connected to mongoDB", process.env.DATABASE);
    });

app.listen(process.env.PORT, ()=>{console.log(`Listening at port: ${process.env.PORT}`)} );