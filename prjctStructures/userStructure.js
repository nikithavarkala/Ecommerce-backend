const mongoose=require("mongoose")
const userStructure=mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true,
    }
})

const user=mongoose.model("user",userStructure)
module.exports=user;