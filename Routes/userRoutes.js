const {signup,login}=require('../controller/userController')
const userRoutes=require('express').Router()

userRoutes.post('/signup',signup)
userRoutes.post('/login',login)

module.exports=userRoutes