const DB = require("./products.json");
const { saveToDatabase } = require("./tools");

const getAllProducts = () => {
  return DB.products;
};

const createNewProduct = (newProduct) => {
    const isAlreadyAdded =
        DB.products.findIndex((product) => product.name === newProduct.name) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.products.push(newProduct);
    saveToDatabase(DB);
    return newProduct;
};

const getLastId = () => {
    try {
        const allIds = getAllProducts();
        if(allIds.length > 0){
            let ids = allIds.map(function(item) {
                return item.id;
            });
            id = Math.max(...ids) + 1;
        }else{
            id = 1;
        }
        return id;
    } catch (error) {
        return false;
    }
}

module.exports = { 
    getAllProducts,
    createNewProduct,
    getLastId,
};