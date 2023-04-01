const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const { application } = require("express")


const pModel=require("./models/productModel")

Mongoose.connect("mongodb+srv://athiraanil:athira@cluster0.akmt4eq.mongodb.net/ecommercedb?retryWrites=true&w=majority",{useNewUrlParser:true})


var app=Express()

app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{

    res.send("welcome to my website")

})

app.post("/add",async(req,res)=>{

    let data=new pModel(req.body)
    console.log(data)
    await data.save()


    res.send(data)


})

app.get("/viewall",async(req,res)=>{
let     data=await pModel.find()

    res.send(data)

})

app.post("/update",async(req,res)=>{

    let     data=await pModel.find()


    res.send(data)


})

app.post("/delete",async(req,res)=>{

    let     data=await pModel.find()


    res.send(data)
})



app.listen(3100)