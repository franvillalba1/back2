import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        required: true
    }
});

const productModel = mongoose.model("product", productSchema);

export default productModel; 