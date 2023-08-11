const Iphone=(req,res)=>{
  const categoryName = req.params.categoryName;
  
  const iphoneData=([
        {
            id: 1,
            name: "iPhone 13",
            category: "iphone 13",
            img: "https://img6.gadgetsnow.com/gd/images/products/additional/large/G306154_View_1/mobiles/smartphones/apple-iphone-13-128-gb-starlight-4-gb-ram-.jpg",
            price: "₹79,999",
          },
          {
            id: 2,
            name: "iPhone 14 Plus",
            category: "iphone 14",
            img: "https://img5.gadgetsnow.com/gd/images/products/medium/G373871/mobiles/smartphones/apple-iphone-14-plus-128-gb-midnight-6-gb-ram-.jpg",
            price: "₹89,999",
          },
          {
            id: 3,
            name: "iPhone SE",
            category: "iphone XS",
            img: 'https://img1.gadgetsnow.com/gd/images/products/medium/G352287/mobiles/smartphones/apple-iphone-se-2022-64-gb-product-red-4-gb-ram-.jpg',
            price: "₹49,999",
          },
          {
            id: 4,
            name: "iPhone 13 Pro",
            category: "iphone",
            img: 'https://img2.gadgetsnow.com/gd/images/products/medium/G306244/mobiles/smartphones/apple-iphone-13-pro-max-256-gb-sierra-blue-6-gb-ram-.jpg',
            price: "₹99,999",
          },
          {
            id: 5,
            name: "iPhone 14 Mini",
            category: "iphone 14",
            img: 'https://m.media-amazon.com/images/I/61F7Xcyux0L._AC_UY218_.jpg',
            price: "₹69,999",
          },
          {
            id: 6,
            name: "iPhone 14 Pro Max",
            category: "iphone 14",
            img: 'https://img6.gadgetsnow.com/gd/images/products/medium/G390874/mobiles/smartphones/apple-iphone-14-pro-max-1-tb-deep-purple-6-gb-ram-.jpg',
            price: "₹109,999",
          },
          {
            id: 7,
            name: "iPhone 12",
            category: "iphone 12",
            img: 'https://img5.gadgetsnow.com/gd/images/products/medium/G201746/mobiles/smartphones/apple-iphone-12-pro-128-gb-pacific-blue-6-gb-ram-.jpg',
            price: "₹59,999",
          },
          {
            id: 8,
            name: "iPhone 14",
            category: "iphone 14",
            img:'https://img3.gadgetsnow.com/gd/images/products/medium/G390870/mobiles/smartphones/apple-iphone-14-pro-max-1-tb-silver-6-gb-ram-.jpg',
            price: "₹84,999",
          },
          {
            id: 9,
            name: "iPhone 13 Mini",
            category: "iphone 14",
            img:'https://img2.gadgetsnow.com/gd/images/products/medium/G306184/mobiles/smartphones/apple-iphone-13-mini-128-gb-pink-4-gb-ram-.jpg',
            price: "₹74,999",
          },
          {
            id: 10,
            name: "iPhone 14 Pro",
            category: "iphone 14",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6t7vVTMHM36XSrdpIRyovAjB_--LVW7k4Xw&usqp=CAU',
            price: "₹109,999",
          },
          {
            id: 11,
            name: "iPhone 14S",
            category: "iphone 14",
            img: 'https://cdn1.smartprix.com/rx-iVyp4t2Vm-w420-h420/apple-iphone-14.jpg',
            price: "₹94,999",
          },
          {
            id: 12,
            name: "iPhone 13 Pro Max",
            category: "iphone 13",
            img: 'https://img3.gadgetsnow.com/gd/images/products/medium/G306240/mobiles/smartphones/apple-iphone-13-pro-max-256-gb-gold-6-gb-ram-.jpg',
            price: "₹109,999",
          },
          {
            id: 13,
            name: "iPhone 13 Mini",
            category: "iphone 13",
            img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958176452',
            price: "₹119,999",
          },
          {
            id: 14,
            name: "iPhone 14C",
            category: "iphone 14",
            img: 'https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UY218_.jpg',
            price: "₹79,999",
          },
          {
            id: 15,
            name: "iPad",
            category: "iphone 11",
            img: 'https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY218_.jpg',
            price: "₹94,999",
          },
          {
            id: 16,
            name: "iPhone X",
            category: "iphone XS",
            img:'https://m.media-amazon.com/images/I/61F7Xcyux0L._AC_UY218_.jpg',
            price: "₹129,999",
          },
          {
            id: 17,
            name: "iPhone 12",
            category: "iphone 12",
            img: 'https://m.media-amazon.com/images/I/71hIfcIPyxS._SX679_.jpg',
            price: "₹79,999",
          },
          {
            id: 18,
            name: "iPhone 14 Pro",
            category: "iphone 14",
            img: 'https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UY218_.jpg',
            price: "₹99,999",
          },
          {
            id: 19,
            name: "iPhone SE",
            category: "iphone XS",
            img: 'https://m.media-amazon.com/images/I/61-MT8AQAPL._AC_UY218_.jpg',
            price: "₹139,999",
          },
          {
            id: 20,
            name: "iPhone 14 Pro Max",
            category: "iphone 14",
            img: 'https://m.media-amazon.com/images/I/611mRs-imxL._AC_UY218_.jpg',
            price: "₹114,999",
          },
          {
            id: 21,
            name: "iPhone 13 Mini",
            category: "iphone 13",
            img: 'https://m.media-amazon.com/images/I/61nPiOOv9BL._AC_UY218_.jpg',
            price: "₹149,999",
          },
          {
            id: 22,
            name: "iPhone 14 Pro Max",
            category: "iphone 14",
            img: 'https://m.media-amazon.com/images/I/71kSEIccp+L._AC_UY218_.jpg',
            price: "₹89,999",
          },
    
  ])

  // console.log(iphoneData)

  if (categoryName === 'iphone') {
    return res.send(iphoneData);
  } 
  else {
    const filteredData = iphoneData.filter(item => item.category.toLowerCase() === categoryName.toLowerCase());
    return res.send(filteredData);
  }
}

module.exports={Iphone}