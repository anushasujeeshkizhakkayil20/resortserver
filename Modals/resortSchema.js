//import mangoose
const mongoose = require('mongoose')
//resort schema
const resortSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    days:{
        type:String,
        require:true
    },
    rate:{
        type:String,
        require:true
    },
    resortImage:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})

//create model
const resorts =mongoose.model("resorts",resortSchema)

//export model
module.exports=resorts