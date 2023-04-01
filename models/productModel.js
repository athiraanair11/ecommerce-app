const Mongoose=require("mongoose")
let pSchema=Mongoose.Schema(

{

    productId:String,
    productName:String,
    modelNumber:String,
    MRP:String,
    Image:String

}

)


let pModel=Mongoose.model("products",pSchema)
module.exports=pModel