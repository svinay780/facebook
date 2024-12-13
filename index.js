const express=require("express")
const app=express()
const port=8080
const mongoose=require("mongoose")
const Chat=require("./model/Sch.js")
const path=require("path")
main()
.then(()=>{
    console.log("mongo is connected")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://svinay780:7QEeUG57.At2Wug@facebook.pjmgl.mongodb.net/?retryWrites=true&w=majority&appName=Facebook');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



app.use(express.static(path.join(__dirname,"static")))
app.set("view engine","ejs")
app.listen(port,(req,res)=>{
    console.log("This app is listening")
})
app.get("/",async(req,res)=>{
    const msg=await Chat.find()
   res.render("chat.ejs",{msg})
})