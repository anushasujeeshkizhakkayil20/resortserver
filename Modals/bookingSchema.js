const mongoose1 = require('mongoose')

const bookingSchema = new mongoose1.Schema({
    username:{
        type:String,
        require:true,
        min:[3,'must be atleat 3 characters ,but got {VALUE}']


    },
    email:{
        type:String,
        require:true,
       
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        }
    },
    phonenumber:{
        type:String,
        require:true

    },
    
    

})

//create modal 
const bookingusers = mongoose1.model("bookingusers",bookingSchema)

//export modal
module.exports = bookingusers