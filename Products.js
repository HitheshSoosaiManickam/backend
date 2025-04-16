const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    price: String
})

const ProductModel = mongoose.model('Products', productSchema, 'Products')
module.exports = ProductModel
