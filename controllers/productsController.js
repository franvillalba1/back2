import productModel from "../models/product.model.js";

export const products = [];
let idActual = 1;

 async function productsController(req, res) {
    try {
        const products = await productModel.find();
        res.status(200).json({
            message: "todos los productos obtenidos con exito",
            products
        })
    } catch (error) {
        res.status(404).json({
            message: "error en controlador productos 1",
            error
        })
    }
}

 async function createProductController(req, res) {
    try {
        const {title, description, code, price, status, stock, category} = req.body;
        const newProduct = await productModel.create({
            title,
            description,
            code,
            price,
            status,
            stock,
            category
        })
        res.status(201).json({
            message: "producto creado con exito",
            newProduct
        })
    } catch (error) {
        res.status(500).json({
            message: "error en el controlador de crear producto",
            error
        })
    }
};

 async function getProductsByIdController (req, res){
    try {
        const {id} = req.params
        const product = await productModel.findById(id);
        if (!product) {
            return res.send("no se encontraron productos")
        }
        res.status(200).json({
            message: "productos encontrados disponibles",
            product
        }); 
    }
    catch (error) {
        res.status(500).json({
            message: "hubo un error en controlador 1 producto",
            error
        });
    }
    } 

    async function updateProduct(req, res) {
        try {
            const {id} = req.params;
            const {stock} = req.body;
            const product = await productModel.findById(id);
            if(!product){
                return res.status(404).send("no se encontro producto");
            }
            const result = await productModel.updateOne({_id : id},{stock : stock});
            res.status(200).json({
                message: "se actualizo el stock",
                result
            })
        } catch (error) {
            res.status(500).json({
                message: "error en controlador update",
                error
            })
        }  
    }
    async function deleteProduct(req, res) {
        try {
            const {id} = req.params;
            const result = await productModel.findByIdAndDelete(id);
            if(!result){
                return res.status(404).json({
                    message: "no existe el producto a borrar"
                })}
                res.status(200).json({
                    message: "producto localizado y borrado",
                    result
            })
        } catch (error) {
            res.status(500).json({
                message: "error en controlador de borrado"
            })
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
export {createProductController, getProductsByIdController, updateProduct, deleteProduct}