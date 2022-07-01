const express = require('express');
const bodyParser = require("body-parser");
const productRouter = require("./v1/routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use("/api/productos", productRouter);

app.listen(PORT, () => {
    console.log('Servidor iniciado.');
})
app.on("error", error => console.log(`Error en servidor ${error}`));