const express=require("express")
const app=express()
const port=8080
const path=path()
app.set("view engine","ejs")
app.listen(port,(req,res)=>{
    console.log("This app is listening")
})
app.get("/msg",(req,res)=>{
   res.render("chat.ejs")
})