let express= require("express")
let mongoose=require("mongoose")
let userRouter=require("./Routes/user")
let loginRouter=require("./Routes/login")



mongoose.connect("mongodb://127.0.0.1:27017/rk")
.then(()=>{
    console.log("db are running")
})
.catch((err)=>{
    console.log(err);
})


let app= express()
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', loginRouter)
// app.get('/',(req,res)=>{
//     res.send('hello Mr Ritik')
// })

app.listen(5000, ()=>{
    console.log('server ron port no. 4000')
})