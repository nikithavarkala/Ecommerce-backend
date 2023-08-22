const Watchs = (req, res) => {
    const categoryName = req.params.categoryName;
    
    const watchData=([
      {
        no: 1,
        name:'Titan men Octane Black',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/90086KM05_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹8,676'
      },
      {
        name:'Raga VIVA Rse Gold',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/2644KM02_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹21,555'
      },
      {
        no: 19,
        name: 'Titan Talk Smart Watch',
        category: 'Titan',
        category2:'watchs',
        img: 'https://staticimg.titan.co.in/Titan/Catalog/90165AP01_1.jpg?impolicy=pqmed&imwidth=640',
        price: '₹7,499',
      },
      {
        name:'Titan Raga Ceramic Analog Watch for Women',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/2606WM08_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹17,495'
      },
      {
        name:'Titan NN1595NL03 Edge Analog Watch for Men',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/9400694206SL01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹7,495'
      },
      {
        no: 4,
        name: 'Rolex ABC Model',
        category: 'Rolex',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/612EBmRyh7L._AC_UL400_.jpg',
        price: '₹50,000',
      },
      {
        no: 5,
        name: 'TIMEX PQR Model',
        category: 'Timex',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61QyY1NxhPL._AC_UL400_.jpg',
        price: '₹5,500',
      },
      {
        name:'Titan Light Leathers',
        category:'Titan',
        category2:'watchs',
        img:'https://www.bigdeals24x7.com/uploads/product_image/product_Titan-Light-Leathers-Watch-With-Brown-Dial-And-Brown-Leather-Strap-90134SL02_1.webp',
        price:'₹8,035'
      },
      {
        no: 6,
        name: 'Fastrack LMN Model',
        category: 'Fastrack',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61T+tL7zfvL._AC_UL400_.jpg',
        price: '₹3,000',
      },
      {
        name:'Mechanical Green Dial',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/90110WL04_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹13,546'
      },
      {
        name:"Titan raga Ceramics green Dial Metal Stap",
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/95146KD02_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹18,445'
      },
      {
        name:'Analogue Men;s Watch-Rolex',
        category:'Rolex',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/615nnoTis0S._AC_UL400_.jpg',
        price:'₹22,980'
      },
      {
        name:'Rolex Daytona',
        category:'Rolex',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/81Ul-DRZcIL._AC_UL400_.jpg',
        price:'₹23,666'
      },
      {
        no: 11,
        name: 'Huawei Watch GT 3',
        category: 'Fossil',
        category2:'watchs',
        img: 'https://cdn.mos.cms.futurecdn.net/AzWBg4ruJyXy6Xd9YgKb3R-1200-80.jpg',
        price: '₹21,990',
      },
      {
        no: 12,
        name: 'Amazfit GTR 3',
        category: 'Fossil',
        category2:'watchs',
        img: 'https://cdn.mos.cms.futurecdn.net/8ZmJNWMP6eMLQpSVhybyBu-1200-80.jpg',
        price: '₹14,990',
      },
      {
        no: 13,
        name: 'Garmin Lily 2',
        category: 'watch',
        category2:'watchs',
        img: 'https://cdn.mos.cms.futurecdn.net/Z3ghjsKprfAheoDfHqeaT3-1200-80.jpg',
        price: '₹19,990',
      },
      {
        name:'Titan 1793KL01 Maritime',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/1696QC04_1.jpg?impolicy=pqmed&imwidth=640',
        price:'17,495'
      },
      {
        no: 14,
        name: 'boAt Watch Active 4',
        category: 'boat',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61DZclqQ4RL._AC_UY218_.jpg',
        price: '₹15,990',
      },
      {
        no: 15,
        name: 'Xiaomi Mi Watch Revolve 2',
        category: 'Fossil',
        category2:'watchs',
        img: 'https://cdn.mos.cms.futurecdn.net/sN8eLLuq4PEJURoEAMM64V-1200-80.jpg',
        price: '₹12,990',
      },
      {
        name:'Titan Neo Analog Silver Daimond',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/2606WM09_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹12,898'
      },
      {
        name:'Titan Bandhan Anthracite Dial Black',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/18062617NM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹6,330'
      },
      {
        no: 16,
        name: 'Casio G-Shock DW5600',
        category: 'Timex',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/71I5UCMl2WL._AC_UL400_.jpg',
        price: '₹6,499',
      },
      {
        name:'Rolex Daimond(Women)',
        category:'Rolex',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/61xuL9-N-nL._AC_UL400_.jpg',
        price:'₹23,666'
      },
      {
        no: 17,
        name: 'Seiko Prospex Automatic Dive Watch',
        category: 'Timex',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/51L+B5p419L._AC_UL400_.jpg',
        price: '₹9,999',
      },
      {
        name:'Animalia from Titan',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/95129QM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹9,500'
      },
      {
        name:'Titan 90140YM01',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/90140YM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹20,395'
      },
      {
        no: 18,
        name: 'Timex Weekender Chronograph',
        category: 'Timex',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61EE47mDJcL._AC_UL400_.jpg',
        price: '₹4,999',
      },
      {
        name:'Modern Blue Dial Leather Strap',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/9400694206QM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹11,930'
      },
      {
        no: 21,
        name: 'Movado Museum Classic Watch',
        category: 'Timex',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/518PcBbMwTL._AC_UL400_.jpg',
        price: '₹9,999',
      },
      {
        no: 22,
        name: 'Longines Master Collection Watch',
        category: 'Timex',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61xJRkCRn-L._AC_UL400_.jpg',
        price: '₹22,490',
      },
      {
        name:'Womens-pink 615OSM04',
        category:'Fastrack',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/71S8hn6xv4L._AC_UL400_.jpg',
        price:'₹1,850'
      },
      {
        
        name:'NEO Spash Blue',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/1805QM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹5,595'
      },
      {
        no: 23,
        name: 'Bulova Precisionist Watch',
        category: 'Timex',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61FdwMLMi+L._AC_UL400_.jpg',
        price: '₹8,999',
      },
      {
        name:'Adult 68011PPO1',
        category:'Fastrack',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/51xkCzoq6DL._AC_UL400_.jpg',
        price:'₹855'
      },
      {
        name:'Analog Multicolor Dail',
        category:'Fastrack',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/71NzhAM+CkL._AC_UL400_.jpg',
        price:'₹2,345'
      },
      {
        no: 25,
        name:'Allure(Raga Moments of Joy)',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/95136QM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹12,455'
      },
      {
        name:'Trendies Analog Black',
        category:'Fastrack',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/51MnttxDAOL._AC_UL400_.jpg',
        price:'₹1,254'
      },
      {
        name:'Dark Analog Brown',
        category:'Fastrack',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/71BEyWDYzQL._AC_UL400_.jpg',
        price:'₹3,445'
      },
      {
        name:'Edge Ceramic MidNight Gold',
        category:"Titan",
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/1696KC01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹27,895'
      },
      {
        name:'Bold Analog-Fastrack',
        category:'Fastrack',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/71WY7bEfkNL._AC_UL400_.jpg',
        price:'₹1,656'
      },
      {
        name:'Celeste(Raga Facets)',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/95118WM02_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹13,295'
      },
      {
        name:'Mechanical Green Dial',
        category:'Titan',
        category2:'watchs',
        img:'https://staticimg.titan.co.in/Titan/Catalog/90110WL04_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹13,546'
      },
      {
        name:'Ruffles Grey-Women',
        category:'Fastrack',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/71QvJho7CEL._AC_UL400_.jpg',
        price:'₹2,090'
      },
      {
        name: 'Hamilton Khaki Field Mechanical Watch',
        category: 'watch',
        category2:'watchs',
        img: 'https://cdn.mos.cms.futurecdn.net/DuZ3NdPjsSrycY9HnVEsqK-1200-80.jpg',
        price: '₹11,990',
      },
      {
        name:'Adult Fastrack',
        category:'Fastrack',
        category2:'watchs',
        img:'https://m.media-amazon.com/images/I/71KubQ4fG1L._AC_UL400_.jpg',
        price:'₹876'
      },
      {
        no: 2,
        name: 'BoAt Watch 4',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61CzD9DbAIL._AC_UY218_.jpg',
        price: '₹18,990'
      },
      {
        no: 3,
        name: 'Fitbit Luxe',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61PmMzYM4qL._AC_UL400_.jpg',
        price: '₹10,999'
      },
      {
        no: 4,
        name: 'Garmin Venu 2',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/71ummMzf9yL._AC_UY218_.jpg',
        price: '₹28,990'
      },
      {
        no: 5,
        name: 'Fossil Gen 6',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/31lb-PBx05L._AC_UL400_.jpg',
        price: '₹16,990'
      },
      {
        no: 6,
        name: 'Huawei Watch GT 3',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61pZcZl1LoL._AC_UY218_.jpg',
        price: '₹21,990'
      },
      {
        no: 7,
        name: 'Amazfit GTR 3',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/71tEn1ydOVL._AC_UY218_.jpg',
        price: '₹14,990'
      },
      {
        no: 8,
        name: 'Garmin Lily 2',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/71iC8Lgrz4L._AC_UY218_.jpg',
        price: '₹19,990'
      },
      {
        no: 9,
        name: 'boAt Watch Active 4',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61nBzBREzGL._AC_UY218_.jpg',
        price: '₹15,990'
      },
      {
        no: 10,
        name: 'Xiaomi Mi Watch Revolve 2',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/51ZHhDmkqLL._AC_UY218_.jpg',
        price: '₹12,990'
      },
      {
        no: 11,
        name: 'Casio G-Shock DW5600',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61a3g231V1L._AC_UL400_.jpg',
        price: '₹6,499'
      },
      {
        no: 12,
        name: 'Seiko Prospex Automatic Dive Watch',
        category: 'boAt',
        category2:'watchs',
        img: 'https://m.media-amazon.com/images/I/61wg8PP3zjL._AC_UL400_.jpg',
        price: '₹9,999'
      },
          {
            no: 13,
            name: 'Timex Weekender Chronograph',
            category: 'Noise',
            category2:'watchs',
            img: 'https://m.media-amazon.com/images/I/71Vx928Yx2L._AC_UY218_.jpg',
            price: '₹4,999'
          },
          {
            no: 14,
            name: 'Citizen Eco-Drive Titanium Watch',
            category: 'Noise',
            category2:'watchs',
            img: 'https://m.media-amazon.com/images/I/71tH69LXCML._AC_UY218_.jpg',
            price: '₹7,499'
          },
          {
            no: 15,
            name: 'Tissot Le Locle Automatic Watch',
            category: 'Noise',
            category2:'watchs',
            img: 'https://m.media-amazon.com/images/I/61ImYWJbw9L._AC_UY218_.jpg',
            price: '₹14,990'
          },
          {
            no: 16,
            name: 'Movado Museum Classic Watch',
            category: 'Noise',
            category2:'watchs',
            img: 'https://m.media-amazon.com/images/I/618mFEP9mTL._AC_UY218_.jpg',
            price: '₹9,999'
          },
          {
            no: 17,
            name: 'Longines Master Collection Watch',
            category: 'Noise',
            category2:'watchs',
            img: 'https://m.media-amazon.com/images/I/61TapeOXotL._AC_UY218_.jpg',
            price: '₹22,490'
          },
          {
            no: 18,
            name: 'Bulova Precisionist Watch',
            category: 'Noise',
            category2:'watchs',
            img: 'https://m.media-amazon.com/images/I/71-tPXHOgML._AC_UY218_.jpg',
            price: '₹8,999'
          },
          {
            no: 19,
            name: 'Oris Divers Sixty-Five Watch',
            category: 'Noise',
            category2:'watchs',
            img: 'https://m.media-amazon.com/images/I/61uIxryDQGL._AC_UY218_.jpg',
            price: '₹19,990'
          },
          {
            no: 20,
            name: 'Hamilton Khaki Field Mechanical Watch',
            category: 'Noise',
            category2:'watchs',
            img: 'https://m.media-amazon.com/images/I/61EAIdvhH7L._AC_UY218_.jpg',
            price: '₹99,990'
          },

    ]);

    if (categoryName === 'watchs') {
      return res.send(watchData);
    } 
    else {
      const filteredData = watchData.filter(item => item.category.toLowerCase() === categoryName.toLowerCase());
      return res.send(filteredData);
    }

  };
  
  module.exports = { Watchs };
  