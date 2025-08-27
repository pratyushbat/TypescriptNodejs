require("dotenv").config()
const express = require("express");
const app = express();
const PORT= process.env.PORT ||3000;
const todoRoute=require('./routes/todos');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// export  process.env.myName='dasds'
console.log('My name is ',process.env.myName)
console.log('MONGO_URL is ',process.env.MONGO_URL)

app.get("/hello", (req:any, res:any) => {
    res.send("hello world");
});

app.use('/public',express.static(__dirname+"/public"));

app.use('/todos',todoRoute);
app.get('/',(req:any,res:any)=>res.send('hello from backend'));


app.listen(PORT, () => console.log("server staretd on "+PORT));