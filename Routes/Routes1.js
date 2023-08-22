const {Mobiles}=require('../controller/Mobiles')
const {Electronics}=require('../controller/Elec')
const {Iphone}=require('../controller/Iphone')
const {Watchs}=require('../controller/Watchs')

const Routes=require("express").Router();

Routes.get('/Mobiles/:categoryName',Mobiles);
Routes.get('/Electronics/:categoryName',Electronics);
Routes.get('/Iphone/:categoryName',Iphone);
Routes.get('/Watchs/:categoryName',Watchs);

module.exports=Routes