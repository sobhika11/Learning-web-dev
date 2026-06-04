const express=require('express');
const app=express();
port=3000;
app.use(express.json());
const employeesData = [
  { id: 101, name: "Alice Vance", role: "Network Engineer" },
  { id: 102, name: "Bob Miller", role: "Security Guard" },
  { id: 103, name: "Charlie Cox", role: "Database Admin" }
];
app.post('/',(req,res)=>{
    const {level}=req.body;
    if(level>10)
        return res.send("Successful");
    else    
        return res.send("Not successful");
})
app.get('/',(req,res)=>{
    console.log("hello");
    res.json({message:"hello"});
})

app.get('/employee',(req,res)=>{
    const{id}=req.body;
    const numericLevel = parseInt(level, 10);
    if(isNaN(numericLevel))
        return res.json({message:"error due to incorrect input"})
    else{
        const find=employeesData.find((emp)=>{ return emp.id==numericLevel});
        if(find)
            return res.json("succesfully found");
        else    
            return res.json("Not found");
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports=app;