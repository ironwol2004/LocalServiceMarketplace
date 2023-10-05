const mongoose=require("mongoose");
const express=require("express");
const bodyParser=require("body-parser");
const _=require("lodash");
const app=express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get("/",(req,res)=>{
    res.render("home");
});
app.listen(3000,()=>{
    console.log("server started");
});
