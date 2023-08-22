const user=require('../prjctStructures/userStructure')
const saltround=10
// const bcrypt=require('bcrypt')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const secretKey='nikitha'

const signup=async (req,res)=>{
    const {name,email,password,number}=req.body
    const existinguser=await user.findOne({email:email})
// console.log("user",existinguser)

    if(existinguser){
        return res.send({msg:'user already exists'})
    }
    else{
        const hashpw=bcrypt.hashSync(password,saltround)
        
        const tempobj=await user({
                name:name,
                email:email,
                password:hashpw,
                number:number
        })
        const result=await tempobj.save();
        // console.log("id:",result._id)
        const token=jwt.sign({ userId: result._id },secretKey,{expiresIn:'8h'})
        return res.send({msg:"success!!",token:token,email:email})
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const userLogin = await user.findOne({ email: email });

    if (userLogin) {
        const valid = bcrypt.compareSync(password, userLogin.password); 

        if (valid) {
            const token = jwt.sign({ userId: userLogin._id }, secretKey,{expiresIn:'8h'});
            return res.send({ msg: 'success!!', token: token,email:email });
        } 
        else {
            return res.send({ msg: 'Incorrect password' });
        }
    }
    return res.send({ msg: 'User is not registered' });
};

module.exports={signup,login}