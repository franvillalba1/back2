export const products = [];
let idActual = 1;

 function productsController(req, res) {
    console.log("ruta productos ok")
    res.json(products);
}

 function createProductController(req, res) {
    createProduct(req.body.title, req.body.description, req.body.code, req.body.price, req.body.status, req.body.stock, req.body.category);
    res.send("producto creado exitosamente")
};

 function getProductsByIdController (req, res){
    const id = Number(req.params.id)
    const product = products.find(p => p.id ===id);
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: "no hay productos disponibles" });
    }
}

function createProduct(title, description, code, price, status, stock, category){
    const product = {
        id: idActual,
        title,
        description,
        code,
        price,
        status,
        stock,
        category
    };
    idActual++;
    products.push(product);
}

export default productsController; 
export {createProductController, getProductsByIdController}