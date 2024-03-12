let express = require("express")
let router=express.Router()
let User= require('../model/user')
let bcrypt= require("bcrypt")

router.post('/signup' , async(req,res)=>{
    console.log(req.body,);
    let data= await User.findOne({email:req.body.email})
    if(data){
        return res.send('user jinda haii')
    }
    else{
        let newPssword = await bcrypt.hash(req.body.passWord,10)
        console.log(newPssword);

        let userData= new User({
            name: req.body.name,
            email:req.body.email,
            passWord:newPssword,
        })
        await userData.save()
        res.send({userData, msg:"creeeeted"})
    }
    // console.log(req.body)
    // res.send("heee")
})
module.exports= router