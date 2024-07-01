const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Brand: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    },
    Photo: {
        data: Buffer,
        contentType: String
    }

})


module.exports = mongoose.model("store", ProductsSchema);