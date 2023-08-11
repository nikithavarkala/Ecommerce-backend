const Watchs = (req, res) => {
    const categoryName = req.params.categoryName;
    
    const watchData=([
      {
        id: 1,
        name:'Titan men Octane Black',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/90086KM05_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹8,676'
      },
      {
        name:'Raga VIVA Rse Gold',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/2644KM02_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹21,555'
      },
      {
        id: 19,
        name: 'Titan Talk Smart Watch',
        category: 'Titan',
        img: 'https://staticimg.titan.co.in/Titan/Catalog/90165AP01_1.jpg?impolicy=pqmed&imwidth=640',
        price: '₹7,499',
      },
      {
        id: 2,
        name: 'Samsung Galaxy Watch 4',
        category: 'Fossil',
        img: 'https://cdn.mos.cms.futurecdn.net/6BN3Brz7mbXJNXg8i39RFH-1200-80.jpg',
        price: '₹18,990',
      },
      {
        name:'Titan Raga Ceramic Analog Watch for Women',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/2606WM08_1.jpg?impolicy=pqmed&imwidth=640',
        price:'17,495'
      },
      {
        name:'Titan NN1595NL03 Edge Analog Watch for Men',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/9400694206SL01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'7,495'
      },
      {
        id: 3,
        name: 'Titan Men Analog Blue...',
        category: 'Titan',
        img: 'https://example.com/titan-watch-img.jpg',
        price: '₹299',
      },
      {
        id: 4,
        name: 'Rolex ABC Model',
        category: 'Rolex',
        img: 'https://example.com/rolex-watch-img.jpg',
        price: '₹50,000',
      },
      {
        id: 5,
        name: 'TIMEX PQR Model',
        category: 'Timex',
        img: 'https://example.com/timex-watch-img.jpg',
        price: '₹5,500',
      },
      {
        name:'Titan Light Leathers',
        category:'Titan',
        img:'https://www.bigdeals24x7.com/uploads/product_image/product_Titan-Light-Leathers-Watch-With-Brown-Dial-And-Brown-Leather-Strap-90134SL02_1.webp',
        price:'8,035'
      },
      {
        id: 6,
        name: 'Fastrack LMN Model',
        category: 'Fastrack',
        img: 'https://example.com/fastrack-watch-img.jpg',
        price: '₹3,000',
      },
      {
        name:'Mechanical Green Dial',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/90110WL04_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹13,546'
      },
      {
        id: 7,
        name: 'Fossil UVW Model',
        category: 'Fossil',
        img: 'https://example.com/fossil-watch-img.jpg',
        price: '₹7,500',
      },
      {
        id: 8,
        name: 'Fitbit Luxe',
        category: 'Fossil',
        img: 'https://cdn.mos.cms.futurecdn.net/FoACwMHv6GQPmVU8KnFJBC-1200-80.jpg',
        price: '₹10,999',
      },
      {
        name:"Titan raga Ceramics green Dial Metal Stap",
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/95146KD02_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹18,445'
      },
      {
        id: 9,
        name: 'Garmin Venu 2',
        category: 'Fossil',
        img: 'https://cdn.mos.cms.futurecdn.net/FkY4Qg6w9X6vHhVbRb3uLE-1200-80.jpg',
        price: '₹28,990',
      },
      {
        id: 10,
        name: 'Fossil Gen 6',
        category: 'Fossil',
        img: 'https://cdn.mos.cms.futurecdn.net/FbfSwWwRLNJ2Vk9BEqJtxj-1200-80.jpg',
        price: '₹16,990',
      },
      {
        id: 11,
        name: 'Huawei Watch GT 3',
        category: 'Fossil',
        img: 'https://cdn.mos.cms.futurecdn.net/AzWBg4ruJyXy6Xd9YgKb3R-1200-80.jpg',
        price: '₹21,990',
      },
      {
        id: 12,
        name: 'Amazfit GTR 3',
        category: 'Fossil',
        img: 'https://cdn.mos.cms.futurecdn.net/8ZmJNWMP6eMLQpSVhybyBu-1200-80.jpg',
        price: '₹14,990',
      },
      {
        id: 13,
        name: 'Garmin Lily 2',
        category: 'watch',
        img: 'https://cdn.mos.cms.futurecdn.net/Z3ghjsKprfAheoDfHqeaT3-1200-80.jpg',
        price: '₹19,990',
      },
      {
        name:'Titan 1793KL01 Maritime',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/1696QC04_1.jpg?impolicy=pqmed&imwidth=640',
        price:'17,495'
      },
      {
        id: 14,
        name: 'Samsung Galaxy Watch Active 4',
        category: 'boat',
        img: 'https://cdn.mos.cms.futurecdn.net/9FEGcAx6dWqyyXYH7a3Ju6-1200-80.jpg',
        price: '₹15,990',
      },
      {
        id: 15,
        name: 'Xiaomi Mi Watch Revolve 2',
        category: 'Fossil',
        img: 'https://cdn.mos.cms.futurecdn.net/sN8eLLuq4PEJURoEAMM64V-1200-80.jpg',
        price: '₹12,990',
      },
      {
        name:'Titan Neo Analog Silver Daimond',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/2606WM09_1.jpg?impolicy=pqmed&imwidth=640',
        price:''
      },
      {
        name:'Titan Bandhan Anthracite Dial Black',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/18062617NM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹6,330'
      },
      {
        id: 16,
        name: 'Casio G-Shock DW5600',
        category: 'Timex',
        img: 'https://cdn.mos.cms.futurecdn.net/KhxKKdzwByitMQAtogCCo8-1200-80.jpg',
        price: '₹6,499',
      },
      {
        id: 17,
        name: 'Seiko Prospex Automatic Dive Watch',
        category: 'Timex',
        img: 'https://cdn.mos.cms.futurecdn.net/gzyHJyMwHMi9sDhU6sFXFJ-1200-80.jpg',
        price: '₹9,999',
      },
      {
        name:'Animalia from Titan',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/95129QM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹9,500'
      },
      {
        name:'Titan 90140YM01',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/90140YM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹20,395'
      },
      {
        id: 18,
        name: 'Timex Weekender Chronograph',
        category: 'Timex',
        img: 'https://cdn.mos.cms.futurecdn.net/3FEWijp5Y3sM2iW5R75REz-1200-80.jpg',
        price: '₹4,999',
      },
      {
        name:'Modern Blue Dial Leather Strap',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/9400694206QM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'11,930'
      },
      {
        id: 20,
        name: 'Titan Edge Cermanic',
        category: 'Titan',
        img: 'https://cdn.mos.cms.futurecdn.net/SZX5XKBpQZz5x6CZ5BZcMQ-1200-80.jpg',
        price: '₹14,990',
      },
      {
        id: 21,
        name: 'Movado Museum Classic Watch',
        category: 'Timex',
        img: 'https://cdn.mos.cms.futurecdn.net/dnYPhT7s4cH67dsmVBn5FZ-1200-80.jpg',
        price: '₹9,999',
      },
      {
        id: 22,
        name: 'Longines Master Collection Watch',
        category: 'Timex',
        img: 'https://cdn.mos.cms.futurecdn.net/8YqVzTktW25u5kKh6yApyL-1200-80.jpg',
        price: '₹22,490',
      },
      {
        
        name:'NEO Spash Blue',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/1805QM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹5,595'
      },
      {
        id: 23,
        name: 'Bulova Precisionist Watch',
        category: 'Timex',
        img: 'https://cdn.mos.cms.futurecdn.net/Cxy4QVdDKwP8NqWzY8B5bm-1200-80.jpg',
        price: '₹8,999',
      },
      {
        id: 24,
        name: 'Oris Divers Sixty-Five Watch',
        category: 'boat',
        img: 'https://cdn.mos.cms.futurecdn.net/Z3ebBkYGzVGaZxAvzQs63P-1200-80.jpg',
        price: '₹19,990',
      },
      {
        id: 25,
        name:'Allure(Raga Moments of Joy)',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/95136QM01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹12,455'
      },
      {
        name:'Edge Ceramic MidNight Gold',
        category:"Titan",
        img:'https://staticimg.titan.co.in/Titan/Catalog/1696KC01_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹27,895'
      },
      {
        name:'Celeste(Raga Facets)',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/95118WM02_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹13,295'
      },
      {
        name:'Mechanical Green Dial',
        category:'Titan',
        img:'https://staticimg.titan.co.in/Titan/Catalog/90110WL04_1.jpg?impolicy=pqmed&imwidth=640',
        price:'₹13,546'
      },
      {
        name: 'Hamilton Khaki Field Mechanical Watch',
        category: 'watch',
        img: 'https://cdn.mos.cms.futurecdn.net/DuZ3NdPjsSrycY9HnVEsqK-1200-80.jpg',
        price: '₹11,990',
      }
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
  