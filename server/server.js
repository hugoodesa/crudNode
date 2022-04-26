const express = require("express")
const cors = require('cors')
const app = express()
const port = 3001

//default conf express
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//crud class
const {runQuery} = require("./service/index")

//insert route
app.post("/rawMaterials",(req,res)=>{
  const {productName,quantity,user} = req.body
  runQuery("insert",[productName,quantity,user])
  res.json({productName,quantity,user})
})

//search route user and rawProduct
app.get("/rawMaterials",async (req,res)=>{
 
  if(req.query?.name){
    const queryParam = req.query.name
    const [result] = await runQuery("select",queryParam)
    result ? res.send(result) : res.send("Any material find")  
  }
  
  if(req.query?.user){
    const queryParam = req.query.user
    const result = await runQuery("selectUser",queryParam)
    let possibleReturn = result ? result : {}
    res.send(possibleReturn);
  }
  
})

//made a request of rawProduct
app.put("/rawMaterials/:id/request",async (req,res)=>{
  const body = req.body
  
  try{
    runQuery("update",{productId:1,user:body?.user})
    res.send({message:"sucess"})
  }catch(err){
    res.send({message:"erro"})
  }
})


app.listen(port,()=>{
  console.log(`server running on http://localhost:${port}`)
})