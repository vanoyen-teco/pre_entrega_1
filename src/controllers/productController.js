const productService = require("../services/productService");

const getAllProducts = (req, res) => {
    const allProducts = productService.getAllProducts();
    res.send({ status: "OK", data: allProducts });
};

const getProductById = (req, res) => {
    const productByID = productService.getProductById(req.params.id);
    (productByID)
    ?res.status(201).send({ status: "OK", data: productByID })
    :res.status(400).send({ status: "FAILED", data: {error: "El producto no existe"} });
};

const getProducts = (req, res) => {
    if(!req.params.id){
        getAllProducts(req, res);
    }else{
        getProductById(req, res);
    }
};

const createNewProduct = (req, res) => {
    const { body } = req;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        res
        .status(400)
        .send({
            status: "FAILED",
            data: {
            error:
                "Lo sentimos, no hemos recibido correctamente los campos requeridos. Revise la documentación.",
            },
        });
        return;
    }
    const newProduct = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };
    const createdProduct = productService.createNewProduct(newProduct);
    (createdProduct)
    ?res.status(201).send({ status: "OK", data: createdProduct })
    :res.status(400).send({ status: "FAILED", data: {error: "Lo sentimos, no pudimos agregar el elemento."} });
    
};
  

module.exports = {
    getProducts,
    createNewProduct,
};