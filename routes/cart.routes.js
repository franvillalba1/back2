import express from "express";
import { addProductToCartController, cardController, createCartController, findCartByIdController } from "../controllers/cartController.js";

const router = express.Router();

router.get("/", cardController);
router.post("/", createCartController);
router.get("/:id", findCartByIdController);
router.post("/:cid/product/:pid", addProductToCartController);

export default router;