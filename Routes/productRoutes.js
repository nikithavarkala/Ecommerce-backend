const { insertProducts, fetchProducts, ProductOne, search } = require("../controller/product-controller")

const productRoutes=require("express").Router()

productRoutes.post('/insertProducts',insertProducts)
productRoutes.get('/fetchProducts/:category',fetchProducts)
productRoutes.get('/productOne/:id',ProductOne)
productRoutes.get('/search/:keyword',search)

module.exports=productRoutes