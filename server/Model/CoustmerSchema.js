const mongoose = require("mongoose");

const CoustmerSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    IsAdmin: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model("coustmers",CoustmerSchema);