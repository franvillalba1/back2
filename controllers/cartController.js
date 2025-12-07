import { products } from "./productsController.js";


let carts = [];

export function cardController (req, res){
    console.log("ruta carrito ok");
    res.send("todo bien")
}
export function createCartController (req, res) {
    createCart();
    res.status(201).send("carrito creado con exito")
}

export function findCartByIdController(req, res){
    findCartById(req, res);
    
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

export function createCart(){
    const newCart = {
        id: carts.length === 0 ? 1 : carts[carts.length - 1].id +1,
        products: []
    };
    carts.push(newCart);
};

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