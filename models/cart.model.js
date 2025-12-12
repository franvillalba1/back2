import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    products : Array
});

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;
