import express from "express";
import bodyParser from "body-parser";

const port=3000;
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var LisItems=["fuck","baby"];
var LisItemsW=["love","baby"];

//Date
const date = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let day = date.getDate();
let week=date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
var datenow=weekday[week]+" "+months[month]+' '+day+', '+year;

app.get('/',(req,res)=>{
    res.render("index.ejs",{
        date:datenow,
        ListNow:LisItems,
        year:year
    });
})

app.get('/work',(req,res)=>{
    res.render("work.ejs",{
        date:datenow,
        ListNow:LisItemsW,
        year:year
    });
})

app.post("/",(req,res)=>{
    let item=req.body["task"];
    LisItems.push(item);
    res.redirect("/");
});

app.post("/work",(req,res)=>{
    let item=req.body["task"];
    LisItemsW.push(item);
    res.redirect("/work");
});



app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});