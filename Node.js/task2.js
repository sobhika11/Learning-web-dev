const express=require('express');
const app=express();
const port =5000
app.use(express.json())
app.use(cors())
const check=(req,res,next)=>{
    const {password}=req.body;
    if(password=="SecureInc")
        next();
    else    
        res.json({
            message:"Error occured ! wrong password attemt"
    });

    }
    app.use(check);
app.post("/check-pass",(req,res)=>{
    return res.send("<div><strong>Happy customer</strong></div>")
});
app.listen(port,() => console.log(`Server running on port ${port}`))