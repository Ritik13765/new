let express = require("express")
let router=express.Router()
let User= require('../model/user')
let bcrypt= require("bcrypt")
// const user = require("../model/user")

router.post('/login' , async(req,res)=>{
    let loginData= await User.findOne({email:req.body.email})
    if(loginData){
        let validpass= await bcrypt.compare(req.body.passWord,loginData.passWord)
        if(validpass){
            res.send(loginData)
            // res.send("ho gaya m login")
        }
        else{
            res.send('passWord invaliddd')
        }
    }
    else{
res.send('user not found')
    }
})
module.exports=router