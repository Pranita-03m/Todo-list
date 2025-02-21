const express = require("express");
const bodyparser = require("body-parser");

var app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));

var items=[];
app.get("/", function(req,res){
    res.render("list",{ejes : items})
});

app.post("/",function(req,res){
    var item =req.body.ele1;
    items.push(item);
    res.redirect("/");
});


app.listen(4000, function(){
    console.log("Server Started");
});