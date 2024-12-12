const express=require("express")
const app=express()
const port=8080
app.listen(port,(req,res)=>{
    console.log("This app is listening")
})
app.get("/msg",(req,res)=>{
    res.send("this is new root")
    console.log("this is the new root")
})