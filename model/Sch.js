const mongoose=require("mongoose")
const ChatSchema=new mongoose.Schema({
    from:"String",
    msg:"String",
    to:"String"
})
const Chat=mongoose.model("Chat",ChatSchema)
module.exports=Chat