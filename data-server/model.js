const mongoose = require("mongoose");

const FeedbackModel = mongoose.model("feedback",
    mongoose.Schema({
        Title: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        Department: {
            type: String,
            required: true
        },
        SubmittedBy: {
            type: String,
            required: true
        },
        DDate: {
            type : Number,
            required: true
        }
    })
);

module.exports = FeedbackModel;
