const cart=require('../prjctStructures/cartStructure')
const productModel=require('../prjctStructures/productStructure')
const jwt=require('jsonwebtoken')
const secretKey='nikitha'

// const addtocart=async (req,res)=>{
//     // const {userId}=req.body;
//     const token = req.headers.authorization.split(' ')[1]; 
//     const decodedToken = jwt.verify(token, secretKey);
//     const { userId } = decodedToken;
//     const id=req.params.product_id

//     const existinguser=await cart.findOne({userId:userId});
//     const productToAdd=await productModel.findOne({_id:id})
//     // console.log("product",productToAdd);

//     if(existinguser){
//         const productIndex = existinguser.products.findIndex(p => p._id.toString() === id);
//         if (productIndex === -1) {
//             existinguser.products.push({product:productToAdd,quantity: 1});
//         } else {
//             existinguser.products[productIndex].quantity += 1;
//         console.log(existinguser.products[productIndex].quantity);

//         }
//         const result=await existinguser.save()
//         return res.send({msg:"added to cart",result:result})
            
//     }
//     else{
//         const result=await cart.create({
//             userId:userId,
//             products:[{ product:productToAdd, quantity: 1 }]
//         })
//         return res.send({msg:"added to cart",result:result})
//     }
//     // return res.send({msg:"added to cart",result:result})
// }

const addtocart = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, secretKey);
    const { userId } = decodedToken;
    const id = req.params.product_id;

    let existingUser = await cart.findOne({ userId: userId });

    if (!existingUser) {
        existingUser = await cart.create({ userId: userId, products: [] });
    }
    try{
        const productToAdd = await productModel.findOne({ _id: id });
        // console.log(productToAdd)

        const productIndex = existingUser.products.findIndex(p => p.product._id.toString() === id);

        if (productIndex === -1) {
            existingUser.products.push({ product: productToAdd, quantity: 1 });
        } else {
            existingUser.products[productIndex].quantity += 1; 
        }

        const result = await existingUser.save();
        return res.send({ msg: "added to cart", result: result });
    }catch(err){
        console.log(err);
    }

}


const fetchcart=async (req,res)=>{
    // const userId=req.params.userId
    const token = req.headers.authorization.split(' ')[1]; 

    if(!token){
        return res.send({msg:'Please log in to fetch the cart.'})
    }
    else{
        try{
            const decodedToken = jwt.verify(token, secretKey);

            const { userId } = decodedToken;
            const userCart=await cart.find({userId:userId})
            return res.send(userCart)
        }catch(err){
            console.log(err);
        }
    }
}

const updateCart = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, secretKey);
    const { userId } = decodedToken;
    const productId = req.params.product_id;
    const action = req.body.action; 

    try {
        let existingUser = await cart.findOne({ userId: userId });

        if (!existingUser) {
            return res.status(404).json({ error: "User's cart not found" });
        }

        const productIndex = existingUser.products.findIndex(p => p.product._id.toString() === productId);

        if (productIndex !== -1) {
            if (action === 'increment') {
                existingUser.products[productIndex].quantity += 1;
            } else if (action === 'decrement') {
                if( existingUser.products[productIndex].quantity > 1){
                    existingUser.products[productIndex].quantity -= 1;
                }
                else{
                    existingUser.products.splice(productIndex, 1);
                }
            } else if (action === 'remove') {
                existingUser.products.splice(productIndex, 1);
            }

            const result = await existingUser.save();
            return res.status(200).json({ msg: "Cart modified", result: result });
        } else {
            return res.status(404).json({ error: "Product not found in cart" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const CartDelete = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, secretKey);
        const { userId } = decodedToken;
    try {
        await cart.updateOne(
            { userId: userId },
            { $set: { products: [] } }
        );
        res.send({ msg: "Cart is empty now" });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

const fetchquantity = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, secretKey);
    const { userId } = decodedToken;

    try {
        const existingUser = await cart.findOne({ userId: userId });

        if (!existingUser) {
            return res.status(404).json({ error: "User's cart not found" });
        }
        let totalQuantity = 0;

        for (const product of existingUser.products) {
            totalQuantity += product.quantity;
        }

        return res.status(200).json({ totalQuantity: totalQuantity });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


module.exports={addtocart,fetchcart,updateCart,CartDelete,fetchquantity}