let express= require("express")
let mongoose=   require('mongoose')
let bcryptjs=  require('bcryptjs')
let cors=require('cors')
let app=  express()
let User=  require('./db.js')
let jwt=  require('jsonwebtoken')
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/db").then(()=>{
   console.log("db......");
   
})

app.post("/signUp", async(req,res)=>{
   let {name,email,passWord ,role}=req.body
  let findData=   await User.findOne({email})
  console.log(findData,"hjehehe");
  if(findData){
   return res.send("user jinda haii....")
  }else{
     let updateddP=   await bcryptjs.hash(passWord,10)

     console.log(updateddP,"dekhoooooo");
     
 let UserInfo=  new User({
      name,email,
      passWord:updateddP,
      role:role||'user'
   

   })
      await UserInfo.save()
      res.send("done.......")
  }
})



app.post('/login', async(req,res)=>{
   let {email,passWord}=req.body

 let findData=   await User.findOne({email})    
 console.log(findData,"heheh");

 let validP= await   bcryptjs.compare(passWord,findData.passWord)
 if(!validP){
   return res.send("kuch nhi ho payega aapse.....")
 }

  
  let token=    jwt.sign({userId:findData._id,email:findData.email,role:findData.role},"hehehehehe")
  console.log(token,"hehe");

  


 
 res.json({msg:"done",token:token})

})
let auth=(req,res,next)=>{
   let token=req.headers.authorization;
   console.log(token,"toeknn");
   
   if(!token){
      return res.send("kaun hai app...")
   }
   try{
      let decode=  jwt.verify(token,"hehehehehe")
      console.log(decode,"isse");
      req.user=decode   
      next()
   }catch(err){
      return res.send("token galat haii ya expire ho gya...")
   }
}


app.get("/api",auth,(req,res)=>{
   res.send("heheh")

})



app.get("/me",auth,async(req,res)=>{
   let userId=req.user.userId

   let findData=  await User.findById(userId).select('-passWord')

   if(!findData){
      return res.send("user nahi mila...")
   }

   res.json({
      name:findData.name,
      email:findData.email,
      role:findData.role
   })
})


app.listen(3000,()=>{
   console.log("server chal raha hai 3000 pe")
})