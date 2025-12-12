import express from "express";
import router from "./routes/root.routes.js";
import productsRouter from "./routes/products.routes.js"
import handlebars from "express-handlebars";
import http from "http";
import { Server } from "socket.io";
import cartRouter from "./routes/cart.routes.js"
import mongoose from "mongoose";

const PORT = 5000
const app = express();
const servidor = http.createServer(app);
const servidorWS = new Server(servidor);

app.use(express.static("public"))
app.use(express.json());
app.engine('handlebars', handlebars.engine());
app.set('view engine','handlebars');
app.use("/", router);
app.use("/products", productsRouter)
app.use("/cart", cartRouter);

mongoose.connect("mongodb://localhost:27017/test")
.then(() => {
    console.log("conectado a la base de datos");
    servidor.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});
})
.catch((error) =>{
    console.log("no se pudo conectar a la base de datos, verifique")
})

// servidor.on("request", () => {
//     console.log("acaba de ingresar una solicitud")
// });

servidorWS.on("connection", (socket) => {
    console.log("cliente ws conectado")
});



