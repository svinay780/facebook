const mongoose = require('mongoose');
const Chat=require("./model/Sch.js")
main()
.then(()=>{
    console.log("mongo is connected")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://svinay780:7QEeUG57.At2Wug@facebook.pjmgl.mongodb.net/?retryWrites=true&w=majority&appName=Facebook');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const User1=new Chat({
    from :"vinay singh",
    msg:"this is my server",
    to:"Shreya"
})
User1.save()