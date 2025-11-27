import express from "express";
import productsController, { createProductController, getProductsByIdController } from "../controllers/productsController.js";

const router = express.Router();

router.get("/", productsController)
router.get("/:id", getProductsByIdController)
router.post("/", createProductController)


export default router;