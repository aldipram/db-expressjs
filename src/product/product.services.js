const { findProducts, findProductsById, insertProduct, deleteProduct, editProductById } = require("./product.repository");

const getAllProducts = async () => {
    const products = await findProducts();

    return products;
};

const getProductById = async (id) => {
    if (typeof id !== "number") {
        throw Error("Id is not number")
    }

    const product = await findProductsById(id);

    if (!product) {
        throw Error("Product not found")
    }

    return product;
};

const createProduct = async (newProductData) => {
    const product = await insertProduct(newProductData);

    return product;
};

const deleteProductById = async (id) => {

    await getProductById(id)

    await deleteProduct(id)
};

const editProduct = async (id, productData) => {
    await getProductById(id);

    const product = await editProductById(id, productData);

    return product;
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProductById,
    editProduct,
}