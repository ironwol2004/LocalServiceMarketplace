const mongoose=require("mongoose");
const express=require("express");
const bodyParser=require("body-parser");
const _=require("lodash");
const ejs=require("ejs");
const app=express();
app.use(express.static(__dirname+"/public"));
app.set('view engine', 'ejs');
app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/categories",(req,res)=>{
    res.render("categories");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/provide_service",(req,res)=>{
    res.render("provide_service");
});
app.listen(3000,()=>{
    console.log("server started");
});
