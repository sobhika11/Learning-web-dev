const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>Hello All!!</h1>")
})

app.get('/api/v1/users',(req,res)=>{
    res.redirect("http://localhost:5001");
})

app.get('/api/v1/billing',(req,res)=>{
    res.redirect("http://localhost:5002");
})

app.listen(5000,()=>{
    console.log("Your host is running on port 5000")
})