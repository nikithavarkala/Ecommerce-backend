const Electronics = (req, res) => {
    const categoryName = req.params.categoryName;

    const ElectData=([
            {
              no: 1,
              name: 'Dell XPS 15',
              category: 'Dell',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/714TjZtB+hL._AC_UY218_.jpg',
              price: '₹89,990'
            },
            {
              no: 2,
              name: 'HP Spectre x360',
              category: 'HP',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/61gB8eMivdL._AC_UY218_.jpg',
              price: '₹79,990'
            },
            {
              no: 3,
              name: 'Lenovo ThinkPad X1 Carbon',
              category: 'Lenovo',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/51Bxs7x4X3L._AC_UY218_.jpg',
              price: '₹94,990'
            },
            {
              no: 21,
              name: 'Sony WF-1000XM4',
              category: 'earbuds',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/214Ck7MfbRL._SY300_SX300_QL70_FMwebp_.jpg',
              price: '₹17,990'
            },
            {
              no: 22,
              name: 'Bose QuietComfort earbudss',
              category: 'earbuds',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/51G45qLluWL._AC_UY218_.jpg',
              price: '₹19,990'
            },
            {
              no: 23,
              name: 'Samsung Galaxy Buds Live',
              category: 'earbuds',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/61G5JoU9tTL._AC_UY218_.jpg',
              price: '₹12,990'
            },
            
            {
              no: 14,
              name: 'Dell Inspiron 14',
              category: 'Dell',
              category2:'Electronics',
              img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/p/f/x/-original-imaghzahmt9zphps.jpeg?q=70',
              price: '₹59,990'
            },
            {
              no: 81,
              name: 'Sony WH-1000XM4',
              category: 'headphone',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_UY218_.jpg',
              price: '₹24,990'
            },
            {
              no: 27,
              name: 'Anker Soundcore Liberty Air 2 Pro',
              category: 'earbuds',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/31EUMeQDumL._AC_UY218_.jpg',
              price: '₹7,990'
            },
            {
              no: 84,
              name: 'Beats Studio 3',
              category: 'headphone',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/61DqKs7xflL._AC_UY218_.jpg',
              price: '₹20,990'
            },
            
            {
              no: 7,
              name: 'Microsoft Surface Laptop 4',
              category: 'Dell',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/61gB8eMivdL._AC_UY218_.jpg',
              price: '₹96,990'
            },
            {
              no: 13,
              name: 'Acer Predator Helios 300',
              category: 'Acer',
              category2:'Electronics',
              img: 'https://rukminim2.flixcart.com/image/312/312/l4ei1e80/computer/0/t/0/-original-imagfbayfqxfz5hm.jpeg?q=70',
              price: '₹1,09,990'
            },
            {
              no: 9,
              name: 'Razer Blade 15',
              category: 'Acer',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/61wi86i8CZL._AC_UY218_.jpg',
              price: '₹1,39,990'
            },
            {
              no: 99,
              name: 'Sennheiser HD 280 Pro',
              category: 'headphone',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/615Nba6dy4L._AC_UY218_.jpg',
              price: '₹7,990'
            },
            {
              no: 100,
              name:'boAt Rockerz 450 Bluetooth',
              category: 'headphone',
              category2:'Electronics',
              img: 'https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY218_.jpg',
              price: '₹15,990'
            },
            
            {
              no: 12,
              name: 'HP Envy x360',
              category: 'Hp',
              category2:'Electronics',
              img: 'https://rukminim2.flixcart.com/image/312/312/khnqqa80/computer/f/j/q/hp-original-imafxmf4quzduemy.jpeg?q=70',
              price: '₹72,990'
            },
            
            
            {
              no: 15,
              name: 'Lenovo Legion 5',
              category: 'Lenovo',
              category2:'Electronics',
              img: 'https://rukminim2.flixcart.com/image/312/312/kk76wsw0/computer/h/j/o/lenovo-original-imafzhsyzryckmew.jpeg?q=70',
              price: '₹88,990'
            },
            
            {
              no: 18,
              name: 'Huawei MateBook X Pro',
              category: 'HP',
              category2:'Electronics',
              img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/i/c/thinkbook-14-business-laptop-lenovo-original-imagrdefsyawe4fv.jpeg?q=70',
              price: '₹1,29,990'
            },
                
                {
                  no: 24,
                  name: 'Jabra Elite 75t',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/610K5CYx6fL._AC_UY218_.jpg',
                  price: '₹13,990'
                },
                {
                  no: 25,
                  name: 'Apple AirPods 3',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/615ekapl+pL._AC_UY218_.jpg',
                  price: '₹14,990'
                },
                {
                  no: 26,
                  name: 'Google Pixel Buds',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/61rPqsDQ-ZL._AC_UY218_.jpg',
                  price: '₹15,990'
                },
                
                {
                  no: 28,
                  name: 'Sennheiser Momentum True Wireless 2',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/81D1ztnaGBL._AC_UY218_.jpg',
                  price: '₹18,990'
                },
                {
                  no: 30,
                  name: 'Skullcandy Indy Evo',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/6119HR9g38L._AC_UY218_.jpg',
                  price: '₹6,990'
                },
                {
                  no: 6,
                  name: 'Acer Swift 3',
                  category: 'Acer',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/81eW38mGOWL._AC_UY218_.jpg',
                  price: '₹54,990'
                },
                {
                  no: 31,
                  name: 'Sony WF-SP800N',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/71+tGw-CD9L._AC_UY218_.jpg',
                  price: '₹11,990'
                },
                {
                  no: 32,
                  name: 'Beats Studio Buds',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/51bRSWrEc7S._AC_UY218_.jpg',
                  price: '₹14,990'
                },
                {
                  no: 33,
                  name: 'Panasonic RZ-S500W',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/511j2gJPSkL._AC_UY218_.jpg',
                  price: '₹8,990'
                },
                {
                  no: 34,
                  name: 'Sennheiser CX True Wireless',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/61lV0xcVp1S._AC_UY218_.jpg',
                  price: '₹20,990'
                },
                {
                  no: 35,
                  name: 'SoundPEATS TrueFree2',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/61YTjEdKlzL._AC_UY218_.jpg',
                  price: '₹3,990'
                },
                {
                  no: 36,
                  name: '1MORE Stylish True Wireless',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/615M503MA9L._AC_UY218_.jpg',
                  price: '₹5,990'
                },
                {
                  no: 37,
                  name: 'Skullcandy Sesh Evo',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/71e5bSW1U9L._AC_UY218_.jpg',
                  price: '₹4,990'
                },
                {
                  no: 38,
                  name: 'Xiaomi Mi True Wireless Earphones 2 Basic',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/61UpbxB6SmL._AC_UY218_.jpg',
                  price: '₹2,990'
                },
                {
                  no: 39,
                  name: 'CrossBeats Neopods 300 TWS ',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/51QuNrHOpQL._AC_UY218_.jpg',
                  price: '₹2,490'
                },
                {
                  no: 40,
                  name: 'Mivi DuoPods A850',
                  category: 'earbuds',
                  category2:'Electronics',
                  img: 'https://m.media-amazon.com/images/I/71MQy4zRwvL._AC_UY218_.jpg',
                  price: '₹1,990'
                },
                {
                    no:41,
                    name:'Dell 14 Laptop, Intel Core i3',
                    category:'Dell',
                    category2:'Electronics',
                    img:'https://m.media-amazon.com/images/I/61G5EPaVmXL._AC_UY218_.jpg',
                    prices:'₹36,990'
                },
                {
                    no:42,
                    name:'Dell Inspiron 5430 13th Gen',
                    category:'Dell',
                    category2:'Electronics',
                    img:'https://m.media-amazon.com/images/I/81y84xvX86L._AC_UY218_.jpg',
                    prices:'₹74,640'
                },
                {
                    no:43,
                    name:'Dell G15-5530 Gaming 13th Gen',
                    category:'Dell',
                    category2:'Electronics',
                    img:'https://m.media-amazon.com/images/I/51+9l6e1z7L._AC_UY218_.jpg',
                    prices:'₹1,13,990'
                },
                {
                    no:44,
                    name:'Dell Inspiron 7420 2in1 Laptop',
                    category:'Dell',
                    category2:'Electronics',
                    img:'https://m.media-amazon.com/images/I/519bScjNkrL._AC_UY218_.jpg',
                    prices:'₹57,990'
                },
                {
                    no:45,
                    name:'Dell 14 Laptop, Intel i5',
                    category:'Dell',
                    category2:'Electronics',
                    img:'https://m.media-amazon.com/images/I/51hEf-tkHrL._AC_UY218_.jpg',
                    prices:'₹46,490'
                },
                {
                    no:46,
                    name:'Lenovo IdeaPad Slim 3 Intel Core i3',
                    category:'Lenovo',
                    category2:'Electronics',
                    img:'https://m.media-amazon.com/images/I/41o-KkXEkSL._AC_UY218_.jpg',
                    prices:'₹33,990'
                }, 
                  
                            
                            {
                              no: 82,
                              name: 'Bose QuietComfort 35 II',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/51CHPyFpnoL._AC_UY218_.jpg',
                              price: '₹19,990'
                            },
                            {
                              no: 83,
                              name: 'Sennheiser HD 660S',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/81xKwnEO3fL._AC_UY218_.jpg',
                              price: '₹31,990'
                            },
                            
                            {
                              no: 85,
                              name: 'JBL Quantum 800',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/712zz31jpaL._AC_UY218_.jpg',
                              price: '₹16,990'
                            },
                            {
                              no: 86,
                              name: 'Infinity - JBL Tranz 710',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/716Il5U5F4L._AC_UY218_.jpg',
                              price: '₹11,990'
                            },
                            {
                              no: 87,
                              name: 'Beyerdynamic DT 990 Pro',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/71LQ3iaQgJL._AC_UY218_.jpg',
                              price: '₹14,990'
                            },
                            {
                              no: 4,
                              name: 'Asus ROG Zephyrus G14',
                              category: 'Asus',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/71Bfs-CYp2L._AC_UY218_.jpg',
                              price: '₹1,09,990'
                            },
                            {
                              no: 88,
                              name: 'AKG K701',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/61N0bdpnjOL._AC_UY218_.jpg',
                              price: '₹12,990'
                            },
                            {
                              no: 89,
                              name: 'Sony WH-1000XM5',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/61vJtKbAssL._AC_UY218_.jpg',
                              price: '₹16,990'
                            },
                            {
                              no: 90,
                              name: 'Boult Audio Anchor',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/715jcYvT9pL._AC_UY218_.jpg',
                              price: '₹17,990'
                            },
                            {
                              no: 91,
                              name: 'Sennheiser HD 599',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/8182xOzfS2L._AC_UY218_.jpg',
                              price: '₹14,990'
                            },
                            {
                              no: 92,
                              name: 'Beats Solo Pro',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/61BehGyHzHL._AC_UY218_.jpg',
                              price: '₹18,990'
                            },
                            {
                              no: 93,
                              name: 'JBL E55BT',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/41Pm1vqeElL._AC_UY218_.jpg',
                              price: '₹9,990'
                            },
                            {
                              no: 94,
                              name: 'boAt Rockerz 370 On Ear',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY218_.jpg',
                              price: '₹15,990'
                            },
                            {
                              no: 95,
                              name: 'Beyerdynamic DT 770 Pro',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/71jMZrXSs6L._AC_UY218_.jpg',
                              price: '₹10,990'
                            },
                            {
                              no: 96,
                              name: 'AKG K240',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/813iLddOkJL._AC_UY218_.jpg',
                              price: '₹6,990'
                            },
                            {
                              no: 16,
                              name: 'Asus VivoBook S15',
                              category: 'Asus',
                              category2:'Electronics',
                              img: 'https://rukminim2.flixcart.com/image/312/312/j8uiljk0/computer/f/9/h/asus-s510un-bq139t-s510un-thin-and-light-laptop-original-imaeyfp5tpbgbumf.jpeg?q=70',
                              price: '₹63,990'
                            },
                            {
                              no: 17,
                              name: 'MSI Prestige 15',
                              category: 'Acer',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/718AiQQtJBL._AC_UY218_.jpg',
                              price: '₹1,09,990'
                            },
                            {
                              no: 97,
                              name: 'Sony WH-CH700N',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/51rpbVmi9XL._AC_UY218_.jpg',
                              price: '₹12,990'
                            },
                            {
                              no: 19,
                              name: 'Samsung Galaxy Book Flex 2',
                              category: 'Asus',
                              category2:'Electronics',
                              img: 'https://rukminim2.flixcart.com/image/312/312/l37mtu80/computer/o/o/w/np750xee-xb1in-thin-and-light-laptop-samsung-original-imagednvzzu7t23v.jpeg?q=70',
                              price: '₹1,12,990'
                            },
                            {
                              no: 20,
                              name: 'Sony VAIO Z',
                              category: 'Asus',
                              category2:'Electronics',
                              img: 'https://rukminim2.flixcart.com/image/312/312/kt8zb0w0/computer/n/m/v/inspiron-3511-thin-and-light-laptop-dell-original-imag6n5kbmfcgxk6.jpeg?q=70',
                              price: '₹1,79,990'
                            },
                            {
                              no: 98,
                              name: 'Bose SoundSport Wireless',
                              category: 'headphone',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/71MU4Yq--ZL._AC_UY218_.jpg',
                              price: '₹9,990'
                            },
                            {
                              no: 11,
                              name: 'Lenovo Yoga C940',
                              category: 'Lenovo',
                              category2:'Electronics',
                              img: 'https://rukminim2.flixcart.com/image/312/312/tablet/g/w/k/lenovo-yt3-850m-original-imaemzaj7nh6pzzf.jpeg?q=70',
                              price: '₹98,990'
                            },
                            {
                              no: 10,
                              name: 'MSI GS66 Stealth',
                              category: 'HP',
                              category2:'Electronics',
                              img: 'https://m.media-amazon.com/images/I/71uFzUMvbOL._AC_UY218_.jpg',
                              price: '₹1,69,990'
                            },
                            {
                              no:47,
                              name:'Apple 2022 MacBook Air Laptop',
                              category:'Apple',
                              category2:'Electronics',
                              img:'https://m.media-amazon.com/images/I/710TJuHTMhL._AC_UY218_.jpg',
                              prices:'₹1,07,990 '
                          }, 
                          {
                              no:48,
                              name:'Apple 2023 MacBook Air',
                              category:'Apple',
                              category2:'Electronics',
                              img:'https://m.media-amazon.com/images/I/81UFHe-hH5L._AC_UY218_.jpg',
                              prices:'₹1,54,900  '
                          },{
                              no:49,
                              name:'MacBook Air-M2 chip: 34.46 cm (13.6-inch)',
                              category:'Apple',
                              category2:'Electronics',
                              img:'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY218_.jpg',
                              prices:'₹1,67,990 '
                          },
                          
        ]);

        if (categoryName === 'Electronics') {
            return res.send(ElectData);
        } 
        else {
            const filteredData = ElectData.filter(item => item.category.toLowerCase() === categoryName.toLowerCase());
            return res.send(filteredData);
        }
};


module.exports = { Electronics };