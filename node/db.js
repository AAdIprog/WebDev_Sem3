let mongoose= require('mongoose')
   
let userSchema=  new mongoose.Schema({
    name:String,
    email:String,
    passWord:String,
    userId:String,
    resetToken:String,
    resetTokenExpiration:Date,
    role:{
        type:String,
        emun:["user",'admin'],
        default:"user"
    }

})

let User= mongoose.model("user",userSchema)
module.exports=User