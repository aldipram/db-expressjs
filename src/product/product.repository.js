const prisma = require("../db")

const findProducts = async () => {
    const products = await prisma.product.findMany();

    return products;
}

const findProductsById = async (id) => {
    const products = await prisma.product.findUnique({
        where: {
            id,
        }
    })
    return products;
}

const insertProduct = async (newProductData) => {
    const product = await prisma.product.create({
        data: {
            name: newProductData.name,
            description: newProductData.description,
            image: newProductData.image,
            price: newProductData.price,
        }
    })  
    return product;
}

const deleteProduct = async (id) => {
    await prisma.product.delete({
        where: {
            id,
        }
    })
}

const editProductById = async (id, productData) => {

    const product = await prisma.product.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name: productData.name,
            description: productData.description,
            image: productData.image,
            price: productData.price
        }
    })
    return product;
}

module.exports = {
    findProducts,
    findProductsById,
    insertProduct,
    deleteProduct,
    editProductById,
}