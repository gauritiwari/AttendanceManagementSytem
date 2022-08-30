var express = require('express');
var app=express();
app.get("/",(req,res)=> {
    res.send("hello from the express");
});

app.listen(8000, ()=>{
    console.log("listening at post 8000")
});