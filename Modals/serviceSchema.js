//import mongoose
const mongoose = require('mongoose')

//service schema
const serviceSchema = mongoose.Schema({
    title:{
       type:String,
       require:true
    },
    status:{
        type:String,
        require:true
     },
     status:{
        type:String,
        require:true
     },
     serviceImage:{
        type:String,
        require:true
     },
     userId:{
        type:String,
        require:true
     },

})

//create model
const serviceusers=mongoose.model("facilityusers",serviceSchema)

//export model
module.exports = serviceusers