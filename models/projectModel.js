const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema( {
    title: {
            type: String,
    },
    tasks: 
        {   title: String, 
            complete: Boolean},
    dateCreated: { type: Date, 
    },
    dateDue: {
        type: Date,
    },
    Notes: { type: String},
    Questions: {type: String},
    Todo: {type: String},
    complete: Boolean,
});

const ProjectModel = mongoose.model("Projects", ProjectSchema);

module.exports = ProjectModel;