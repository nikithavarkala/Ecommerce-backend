const mongoose=require("mongoose")

const productStructure=mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    category2:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
})

const product=mongoose.model("Product",productStructure)
module.exports=product;