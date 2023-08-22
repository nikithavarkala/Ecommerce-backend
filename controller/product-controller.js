const Data=require('../ProductsData')
const product=require('../prjctStructures/productStructure')

const insertProducts=async(req,res)=>{
    const data=Data
    const result=await product.insertMany(data);
    return res.send({msg:"product data has been stored",result:result})
}

const fetchProducts=async (req,res)=>{
    const {category}=req.params
    // const result=await product.find({category:category})
    const result=await product.find({
        $or: [
            { category: category },
            { category2: category }
        ]
    })

    return res.send(result)
}

const ProductOne=async (req,res)=>{
    const id=req.params.id
    const result=await product.find({_id:id})
    // console.log(result,id)
    return res.send(result)
}

const search= async (req, res) => {
    const keyword  = req.params.keyword; // Get the search keyword from the query parameter
  
    try {
    //   const products = await product.find({
    //     name: { $regex: keyword, $options: 'i' } // Perform a case-insensitive search using regular expression
    //   });

      const products = await product.find({
        $or: [
          { name: { $regex: keyword, $options: 'i' } },
          { category: { $regex: keyword, $options: 'i' } }
        ]
      });
  
      res.send(products);
    } catch (error) {
      console.error(error);
      res.send({ message: 'Internal server error' });
    }
}
 

module.exports={insertProducts,fetchProducts,ProductOne,search}
    