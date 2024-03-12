let mongoose = require('mongoose')
let userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passWord:{
        type:String,
        required:true
    }
})

let user=mongoose.model('user', userSchema)
module.exports=user