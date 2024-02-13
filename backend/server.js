const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");

const app = express();
dotenv.config();


app.get("/" , (req , res)=>{
    res.send("api is working");
})

app.get("/api/chats" , (req , res)=>{
    res.send(chats); 
})

app.get("/api/chat/:id" , (req , res)=>{
    const singleChat = chats.find((c)=> c._id === req.params.id) ;
    res.send(singleChat);

})

const PORT = process.env.PORT || 5000 ;

app.listen( 5000 , console.log(`YoU are successfully connected on PORT ${PORT} `));