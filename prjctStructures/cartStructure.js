const mongoose=require("mongoose")

const cartStructure=mongoose.Schema({
    userId:{
        type: String,
        required:true
    },
    products:[{
        // type:Object,
        // required:true
            product:{
                type:Object,
                required: true
            },
            quantity: {
                type: Number,
                default: 1 // Default quantity for a product in the cart
            }
        }]
})

const cart=mongoose.model("Cart",cartStructure)
module.exports=cart;