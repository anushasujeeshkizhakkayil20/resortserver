//import mangoose

const mongoose =require('mongoose')

//sightschema
const sightSchema =new mongoose.Schema({
    title:{
      type:String,
      require:true
    },
    overview:{
        type:String,
        require:true
    },
    sightImage:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})

//create model
const seens =mongoose.model("seens",sightSchema)

//export model
module.exports = seens