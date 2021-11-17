const { Schema, model} = require("mongoose");

const ProductSchema = Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        trim: true
    },
    stock: {
        type: Number,
        required: true
    },
    model: {
        type: String,
        required: true
    },
},{timestamps: true});

module.exports = model("Product", ProductSchema, "Products");
