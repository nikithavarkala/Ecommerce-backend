const Electronics=(req,res)=>{
    return res.send([
        {
            id:1,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZycjP89oQ3LksGlp0tleAM6Ecb_Wy3m2snA&usqp=CAU',
            name:'Dell 12th Gen',
            price:'₹55,600'
        },
        {
            id:2,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZycjP89oQ3LksGlp0tleAM6Ecb_Wy3m2snA&usqp=CAU',
            name:'Dell 12th Gen',
            price:'₹55,600'
        }
    ])
}
module.exports={Electronics}