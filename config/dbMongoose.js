const mongoose=require("mongoose")
mongoose.set("strictQuery",true)

// const url="mongodb://0.0.0.0:27017/Employee"
const url="mongodb+srv://nikithav:varkala1234@cluster0.p2v99sl.mongodb.net/Ecommerce?retryWrites=true&w=majority"

const connection=async()=>{
    try{
       await mongoose.connect(url)
        console.log("server connected with the database")
       
    }
    catch(err){
        console.log(err,"error connection")
    }
}
module.exports=connection;