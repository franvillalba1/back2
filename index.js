import express from "express";
import router from "./routes/root.routes.js";
import productsRouter from "./routes/products.routes.js"
import handlebars from "express-handlebars";

const app = express();
const PORT = 5000
app.use(express.json());
app.engine('handlebars', handlebars.engine());
app.set('view engine','handlebars');
app.use("/", router);
app.use("/products", productsRouter)


const server = app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});

server.on("request", () => {
    console.log("acaba de ingresar una solicitud")
});



