import cartModel from "../models/cart.model.js";
import { products } from "./productsController.js";


let carts = [];

export async function cardController (req, res){
    try {
        const carts = await cartModel.find();
        res.status(200).json({
            message: "todos los carritos",
            carts
        });
        
    } catch (error) {
        res.status(500).json({
            message: "error en controlador carritos",
            error
        })
    }
}
export async function createCartController (req, res) {
    try {
        const newCart = await cartModel.create({});
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).send("error al crear carrito, controlador cart", error);
    }
}

export async function findCartByIdController(req, res){
    try {
        const { id } =req.params
        const cart = await cartModel.findById(id);
        if(!cart){
            return res.status(404).json({
                message : "carrito inexistente"
            });
        }
        res.status(200).json({
            message: "carrito encontrado",
            cart
        });
    } catch (error) {
        res.status(500).json({
            message: "error en controlador by id",
            error
        });
    }
}


export function findCartById(req, res){
   const id = Number(req.params.id);
    const cart = carts.find(c => c.id === id)
    if (cart) {
        res.json(cart)
    } else {
        res.status(404).send("no existe carrito")
    }
}

// export function createCart(){
//     const newCart = {
//         id: carts.length === 0 ? 1 : carts[carts.length - 1].id +1,
//         products: []
//     };
//     carts.push(newCart);
// };

export function addProductToCartController(req, res) {
    const cid= Number(req.params.cid);
    const pid= Number(req.params.pid);

    const cart = carts.find(c => c.id === cid);
    if (!cart) {
        return res.status(404).send("carrito inexistente");
    } 
    const productInCart = cart.products.find(p => p.product === pid);

    if (!productInCart) {
        cart.products.push({
            product: pid,
            quantity: 1
        });
    } else {
        productInCart.quantity +=1
    }
    res.status(201).send("producto agregado exitosamente")
};