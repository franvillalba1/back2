import express from "express";
import { addProductToCartController, cardController, createCartController, deleteCart, findCartByIdController, modifyProductInCartController } from "../controllers/cartController.js";

const router = express.Router();

router.get("/", cardController);
router.post("/", createCartController);
router.get("/:id", findCartByIdController);
router.post("/:cid/product/:pid", addProductToCartController);
router.put("/:cid/product/:pid", modifyProductInCartController)
router.delete("/:id", deleteCart)

export default router;