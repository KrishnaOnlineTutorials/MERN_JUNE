const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    } 
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;