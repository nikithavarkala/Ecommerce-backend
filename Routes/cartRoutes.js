const {addtocart, fetchcart, updateCart, CartDelete, fetchquantity}=require('../controller/cartController')
const cartRoutes=require('express').Router()

cartRoutes.post('/addtocart/:product_id',addtocart)
cartRoutes.get('/fetchcart',fetchcart)
cartRoutes.post('/updatecart/:product_id',updateCart)
cartRoutes.post('/delcart',CartDelete)
cartRoutes.get('/fetchquantity',fetchquantity)

module.exports=cartRoutes