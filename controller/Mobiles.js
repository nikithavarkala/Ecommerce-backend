const Mobiles=(req,res)=>{
    const categoryName = req.params.categoryName;

    const MobileData=([
        {
            id:1,
            name:'Vivo y17',
            category:'Vivo',
            img:'https://i.gadgets360cdn.com/products/large/1556105245_635_vivoy17_db.jpg?downsize=*:360',
            price:'₹14,990'   
        },
        {
            id:2,
            name:'Redmi Note 9 pro max',
            category:'Mi',
            img:'https://img4.gadgetsnow.com/gd/images/products/additional/large/G311842_View_1/mobiles/smartphones/xiaomi-redmi-note-10-lite-128-gb-aurora-blue-6-gb-ram-.jpg',
            price:'₹15,490'
        },
        {
            id:3,
            name:'Samsung Galaxy S22 Ultra 5G',
            category:'Samsung',
            img:'https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UF894,1000_QL80_.jpg',
            price:'₹84,500'
        },
        {
            id:4,
            name:'realme naxzo 60 pro',
            category:'Realme',
            img:'https://i.gadgets360cdn.com/products/large/realme-narzo-60-pro-5g-realme-db-650x800-1688653651.jpg?downsize=*:360',
            price:'₹25,655'
        },
        {
            id:5,
            name:'Oppo Reno6 5G',
            category:'OPPO',
            img:'https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-pro-5g-oversea/navigation/Homepage-header2-artic-blue-427-x-600.png',
            price:'₹12,500'
        },
        {
            id:6,
            name:'realme Narzo 10',
            category:'Realme',
            img:'https://static.toiimg.com/thumb/resizemode-4,msid-75694520,imgsize-500,width-800/75694520.jpg',
            price:'₹11,699'
        },
        {
            id:7,
            name:'Samsung Galaxy F23 5G',
            category:'Samsung',
            img:'https://www.jiomart.com/images/product/original/493666100/samsung-galaxy-f-series-f23-5g-128-gb-6-gb-ram-forest-green-mobile-phone-digital-o493666100-p600342532-0-202304101514.jpeg?im=Resize=(420,420)',
            price:'₹15,499'
        },
        {
            id:8,
            name:'realme 9 pro+',
            category:'Realme',
            img:'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/182273_2020_4.jpg',
            price:'₹14,999'
        },
        {
            id:9,
            name:'Realme narzo N55',
            category:'Realme',
            img:'https://specifications-pro.com/wp-content/uploads/2023/04/Realme-Narzo-N55.jpg',
            price:'₹10,999'
        },
        {
            id:10,
            name:'OnePlus Nord CE',
            category:'mobile',
            img:'https://skinsy.in/wp-content/uploads/2022/05/Oneplus-Nord-CE-2-Skins-wraps-covers.webp',
            price:'₹17,999'
        },
        {
            id:11,
            name:'Redmi Note 9 pro ',
            category:'Mi',
            img:'https://m.media-amazon.com/images/I/41s5TUvUDZL._SX300_SY300_QL70_FMwebp_.jpg',
            price:'₹13,599'
        },
        {
            id:12,
            name:'IQOO Z7',
            category:'OPPO',
            img:'https://img5.gadgetsnow.com/gd/images/products/additional/large/G425795_View_1/mobiles/smartphones/iqoo-z7-128-gb-norway-blue-8-gb-ram-.jpg',
            price:'₹23,999'
        },
        {
            id: 13,
            name: "Samsung Galaxy A13 ",
            category: "Samsung",
            image: "https://m.media-amazon.com/images/I/81i1A1MgXBL._SL1500_.jpg",
            price: "₹14500",
        },
        {
            id: 14,
            name: "Asus Zenfone 8",
            category: "Asus",
            image: "https://dlcdnwebimgs.asus.com/gain/c05b6491-6d2b-48f0-81f0-d268840208d6/",
            price: "₹15500",
        },
        {
            id: 15,
            name: "Redmi Note 11",
            category: "Mi",
            image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_SS450_.jpg",
            price: "₹23500",
        },
        {
            id: 16,
            name:"Google Pixel 5",
            category: "Mi",
            image: "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Teaser_Google_Pixel_5.jpg",
            price: "₹17000",
        },
        {
            id: 17,
            name: "OnePlus 10 Pro",
            category: "Oneplus",
            image: "https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
            price: "₹19,500",
        },
        {
            id: 18,
            name: "Google Pixel 4 XL",
            category: "Mi",
            image: "https://m.media-amazon.com/images/I/71oTy+incwL._SL1500_.jpg",
            price: "₹16000",
        },
        {
            id:19,
            name:'Vivo y17',
            category:'Vivo',
            img:'https://i.gadgets360cdn.com/products/large/1556105245_635_vivoy17_db.jpg?downsize=*:360',
            price:'₹14,990'   
        },
        {
            id:20,
            name:'Redmi Note 9 pro max',
            category:'Mi',
            img:'https://mobilegoo.shop/cdn/shop/products/Untitleddesign_1.jpg?v=1674641063&width=493',
            price:'₹15,490'
        },
        {
            id:21,
            name:'Samsung Galaxy S22 Ultra 5G',
            category:'Samsung',
            img:'https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UF894,1000_QL80_.jpg',
            price:'₹84,500'
        },
        {
            id:22,
            name:'Realme narzo N55',
            category:'Realme',
            img:'https://specifications-pro.com/wp-content/uploads/2023/04/Realme-Narzo-N55.jpg',
            price:'₹10,999'
        },
        {
            id:23,
            name:'Oppo Reno6 5G',
            category:'OPPO',
            img:'https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-pro-5g-oversea/navigation/Homepage-header2-artic-blue-427-x-600.png',
            price:'₹12,500'
        },
        {
            id:24,
            name:'realme Narzo 10',
            category:'Realme',
            img:'https://static.toiimg.com/thumb/resizemode-4,msid-75694520,imgsize-500,width-800/75694520.jpg',
            price:'₹11,699'
        },
        {
            id:25,
            name:'Samsung Galaxy F23 5G',
            category:'Samsung',
            img:'https://www.jiomart.com/images/product/original/493666100/samsung-galaxy-f-series-f23-5g-128-gb-6-gb-ram-forest-green-mobile-phone-digital-o493666100-p600342532-0-202304101514.jpeg?im=Resize=(420,420)',
            price:'₹15,499'
        },
        {
            id:26,
            name:'realme 9 pro+',
            category:'Realme',
            img:'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/182273_2020_4.jpg',
            price:'₹14,999'
        },
        {
            id:27,
            name:'realme naxzo 60 pro',
            category:'Realme',
            img:'https://i.gadgets360cdn.com/products/large/realme-narzo-60-pro-5g-realme-db-650x800-1688653651.jpg?downsize=*:360',
            price:'₹25,655'
        },
        {
            id:28,
            name:'OnePlus Nord CE',
            category:'OnePlus',
            img:'https://skinsy.in/wp-content/uploads/2022/05/Oneplus-Nord-CE-2-Skins-wraps-covers.webp',
            price:'₹17,999'
        },
        
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