const Product = require("../database/Product");

const getAllProducts = () => {
    const allProducts = Product.getAllProducts();
    return allProducts;
};

const getProductById = (id) => {
    const productId = id; //validar
    const getProduct = Product.getProductById(productId);
    return getProduct;
};

const createNewProduct = (newProduct) => {
    const lastId = Product.getLastId() ;
    const productToInsert = {
        ...newProduct,
        id: lastId,
        createdAt: new Date().toLocaleString("es-ES"),
        updatedAt: new Date().toLocaleString("es-ES"),
    };
    try {
        if(lastId){
            const createdProduct = Product.createNewProduct(productToInsert);
            return createdProduct;
        }
    } catch (error) {
        return false;
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
};