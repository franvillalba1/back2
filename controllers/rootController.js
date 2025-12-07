

export function rootController (req, res) {
    console.log("ok");
    res.send("ruta raiz funcionando correctamente")
    res.render("index")
};

export default rootController;