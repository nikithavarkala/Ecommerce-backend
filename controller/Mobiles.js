const Mobiles=(req,res)=>{
    const categoryName = req.params.categoryName;

    const MobileData=([
        {
            no:1,
            name:'Vivo y17',
            category:'Vivo',
            category2:'Mobiles',
            img:'https://i.gadgets360cdn.com/products/large/1556105245_635_vivoy17_db.jpg?downsize=*:360',
            price:'₹14,990'   
        },
        {
            no:2,
            name:'Redmi Note 9 pro max',
            category:'Mi',
            category2:'Mobiles',
            img:'https://img4.gadgetsnow.com/gd/images/products/additional/large/G311842_View_1/mobiles/smartphones/xiaomi-redmi-note-10-lite-128-gb-aurora-blue-6-gb-ram-.jpg',
            price:'₹15,490'
        },
        {
            no:3,
            name:'Samsung Galaxy S22 Ultra 5G',
            category:'Samsung',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UF894,1000_QL80_.jpg',
            price:'₹84,500'
        },
        {
            no:4,
            name:'realme naxzo 60 pro',
            category:'Realme',
            category2:'Mobiles',
            img:'https://i.gadgets360cdn.com/products/large/realme-narzo-60-pro-5g-realme-db-650x800-1688653651.jpg?downsize=*:360',
            price:'₹25,655'
        },
        {
            no:5,
            name:'Oppo Reno6 5G',
            category:'OPPO',
            category2:'Mobiles',
            img:'https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-pro-5g-oversea/navigation/Homepage-header2-artic-blue-427-x-600.png',
            price:'₹12,500'
        },
        {
            no:6,
            name:'realme Narzo 10',
            category:'Realme',
            category2:'Mobiles',
            img:'https://static.toiimg.com/thumb/resizemode-4,msid-75694520,imgsize-500,width-800/75694520.jpg',
            price:'₹11,699'
        },
        {
            no:7,
            name:'Samsung Galaxy F23 5G',
            category:'Samsung',
            category2:'Mobiles',
            img:'https://www.jiomart.com/images/product/original/493666100/samsung-galaxy-f-series-f23-5g-128-gb-6-gb-ram-forest-green-mobile-phone-digital-o493666100-p600342532-0-202304101514.jpeg?im=Resize=(420,420)',
            price:'₹15,499'
        },
        {
            no:8,
            name:'realme 9 pro+',
            category:'Realme',
            category2:'Mobiles',
            img:'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/182273_2020_4.jpg',
            price:'₹14,999'
        },
        {
            no:9,
            name:'Realme narzo N55',
            category:'Realme',
            category2:'Mobiles',
            img:'https://specifications-pro.com/wp-content/uploads/2023/04/Realme-Narzo-N55.jpg',
            price:'₹10,999'
        },
        {
            no:10,
            name:'OnePlus Nord CE',
            category:'mobile',
            category2:'Mobiles',
            img:'https://skinsy.in/wp-content/uploads/2022/05/Oneplus-Nord-CE-2-Skins-wraps-covers.webp',
            price:'₹17,999'
        },
        {
            no:11,
            name:'Redmi Note 9 pro ',
            category:'Mi',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/41s5TUvUDZL._SX300_SY300_QL70_FMwebp_.jpg',
            price:'₹13,599'
        },
        {
            no:12,
            name:'IQOO Z7',
            category:'OPPO',
            category2:'Mobiles',
            img:'https://img5.gadgetsnow.com/gd/images/products/additional/large/G425795_View_1/mobiles/smartphones/iqoo-z7-128-gb-norway-blue-8-gb-ram-.jpg',
            price:'₹23,999'
        },
        
        {
            no: 15,
            name:'Redmi Note 9 pro max',
            category:'Mi',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/51e9JczbZmL._AC_UY218_.jpg',
            price:'₹15,490'
        },
        {
            no: 17,
            name:'Samsung Galaxy S22 Ultra 5G',
            category:'Samsung',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UF894,1000_QL80_.jpg',
            price:'₹84,500'
        },
        {
            no: 18,
            name:'Redmi Note 9 pro max',
            category:'Mi',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/81ZZPvIWnYL._AC_UY218_.jpg',
            price:'₹15,490'
        },
        {
            no:19,
            name:'Vivo y16',
            category:'Vivo',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/61vBPptSghL._AC_UY218_.jpg',
            price:'₹11,990'   
        },
        {
            no:20,
            name: "Redmi Note 11",
            category: "Mi",
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/51TuDBH70FL._AC_UY218_.jpg',
            price: "₹23500",
            
        },
        {
            no:21,
            name:'Samsung Galaxy Z Fold 5G',
            category:'Samsung',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/716pi7fRTpL._AC_UY218_.jpg',
            price:'₹84,500'
        },
        {
            no:31,
            name:'Redmi Note 9 pro max',
            category:'Mi',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/51e9JczbZmL._AC_UY218_.jpg',
            price:'₹15,490'
        },
        {
            no:'32',
            name:'Redmi Note 12',
            category:'Mi',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/51Hd6dpPypL._AC_UY218_.jpg',
            price:'₹13,790'
        },
        {
            no:'33',
            name:'Redmi Note 13 pro',
            category:'Mi',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/61RvCwjI7dL._AC_UY218_.jpg',
            price:'₹79,500'
        },
        {
            no:22,
            name:'Realme narzo N55',
            category:'Realme',
            category2:'Mobiles',
            img:'https://specifications-pro.com/wp-content/uploads/2023/04/Realme-Narzo-N55.jpg',
            price:'₹10,999'
        },
        {
            no:23,
            name:'Oppo Reno6 5G',
            category:'OPPO',
            category2:'Mobiles',
            img:'https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-pro-5g-oversea/navigation/Homepage-header2-artic-blue-427-x-600.png',
            price:'₹12,500'
        },
        {
            name:'Oppo F23 5G',
            category:'OPPO',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/81kvDo7F0GL._AC_UY218_.jpg',
            price:'₹24,500'
        },
        {
            no:24,
            name:'realme Narzo 10',
            category:'Realme',
            category2:'Mobiles',
            img:'https://static.toiimg.com/thumb/resizemode-4,msid-75694520,imgsize-500,width-800/75694520.jpg',
            price:'₹11,699'
        },
        {
            no:25,
            name:'Samsung Galaxy F23 5G',
            category:'Samsung',
            category2:'Mobiles',
            img:'https://www.jiomart.com/images/product/original/493666100/samsung-galaxy-f-series-f23-5g-128-gb-6-gb-ram-forest-green-mobile-phone-digital-o493666100-p600342532-0-202304101514.jpeg?im=Resize=(420,420)',
            price:'₹15,499'
        },
        {
            name:'Lava Baze 5G',
            category:'Samsung',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/51CS5pPGiCL._AC_UY218_.jpg',
            price:'₹12,499'
        },
        {
            name:'Samsung Galaxy Z Flip5 5G',
            category:'Samsung',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/61Tl1z+Hn0L._AC_UY218_.jpg',
            price:'₹97,499'
        },
        {
            name:'Samsung Galaxy A23 5G',
            category:'Samsung',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/81OdHJcG6yL._AC_UY218_.jpg',
            price:'₹97,499'
        },
        {
            no:26,
            name:'realme 9 pro+',
            category:'Realme',
            category2:'Mobiles',
            img:'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/182273_2020_4.jpg',
            price:'₹14,999'
        },
        {
            no:27,
            name:'realme naxzo 60 pro',
            category:'Realme',
            category2:'Mobiles',
            img:'https://i.gadgets360cdn.com/products/large/realme-narzo-60-pro-5g-realme-db-650x800-1688653651.jpg?downsize=*:360',
            price:'₹25,655'
        },
        {
            no:28,
            name:'OnePlus Nord CE',
            category:'OnePlus',
            category2:'Mobiles',
            img:'https://skinsy.in/wp-content/uploads/2022/05/Oneplus-Nord-CE-2-Skins-wraps-covers.webp',
            price:'₹17,999'
        },
        {
            no:29,
            name:'Vivo y27',
            category:'Vivo',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/61gdyDHr9ZL._AC_UL400_.jpg',
            price:'₹15,990'   
        },
        {
            no:30,
            name:'Vivo Y56 5G',
            category:'Vivo',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/61y7ZbTQcWL._AC_UY218_.jpg',
            price:'₹18,999'   
        },
        {
            name:'3D Printed Back Mobile cover',
            category:'MobileCases',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/71XN0ADcWPL._AC_UY218_.jpg',
            price:'₹199'
        },
        {
            name:'6D Cover case-Redmi Note 9',
            category:'MobileCases',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/71rdSKyiEeL._AC_UY218_.jpg',
            price:"₹260"
        },
        {   
            name:'3D Case-Redmi Note9',
            category:'MobileCases',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/71a0DfBxxmL._AC_UY218_.jpg',
            price:"₹190"
        },
        {
            name:'NDCOM for Sunset',
            category:"MobileCases",
            category2:'Mobiles',
            img:"https://m.media-amazon.com/images/I/61Z3Yhp5mkL._AC_UY218_.jpg",
            price:"₹250"
        },
        {
            name:'Protection Cartoon Character Charger case',
            category:'MobileCharger',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/71a2KVgrn-L._AC_UY218_.jpg',
            price:'₹320'
        },
        {
            name:'AUGEN Cartoon 3D Protective Case',
            category:'MobileCharger',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/61Wgov6xdbL._AC_UY218_.jpg',
            price:'₹320'
        },
        {
            name:'Cartoon silicon charger',
            category:'MobileCharger',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/61zaaUWMTQL._AC_UY218_.jpg',
            price:'₹349'
        },
        {
            name:'Coffe Cup Cartoon silicon charger',
            category:'MobileCharger',
            category2:'Mobiles',
            img:'https://m.media-amazon.com/images/I/71Jb06QJVJL._AC_UY218_.jpg',
            price:'₹449'
        }

    ])

    if (categoryName === 'Mobiles') {
        // If the category is "Mobile", send all data
        return res.send(MobileData);
    } else {
        // Otherwise, filter data based on the requested category
        const filteredData = MobileData.filter(item => item.category.toLowerCase() === categoryName.toLowerCase());
        return res.send(filteredData);
    }
}

module.exports={Mobiles}