import express from "express";
import productsController, { createProductController, deleteProduct, getProductsByIdController, updateProduct } from "../controllers/productsController.js";

const router = express.Router();

router.get("/", productsController)
router.get("/:id", getProductsByIdController)
router.post("/", createProductController)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)


export default router;