//import to resolve request
//import modal
const bookingusers =require('../Modals/bookingSchema')
  

//import jwt
const jwt = require('jsonwebtoken')


 //logic for bookregister
    exports.bookregister =async(req,res)=>{
    console.log('inside the controller booking function');
    //extract data from reqbody
    const{username,email,phonenumber}=req.body
   try{ const existUser =  await bookingusers.findOne({email})
    if(existUser){
        res.status(406).json('Account already exist...pleaselogin')
    }
    else{
        //create an object
        const newUser = bookingusers({
            username,
            email,
            phonenumber
        })
          //save fun in mangoose -permantely data mongodb
          await newUser.save()

         //response
    res.status(200).json(newUser)
        
    }}
    catch(err){
      res.status(401).json('booking failed due to ',err)
    }


   
}

//logic for booking login
exports.booklogin=async(req,res)=>{
    console.log('inside controll login function');

    const{email,phonenumber}=req.body
    try{const existingUser = await bookingusers.findOne({email,phonenumber})
    console.log(existingUser);

    if(existingUser){
        const token = jwt.sign({userId:existingUser._id},"supersecretekey45678")

        res.status(200).json({
            existingUser,
            token
        })
    }
      else{
        res.status(406).json('incorrect email or phonenumber')
      }
    }catch(err){
        res.status(401).json(`login due to ${err}`)
    }


}

//get register
exports.getbooking =async(req,res)=>{
  try {
    const userId =req.payload
  const bookcustomer =await bookingusers.find({userId})
  res.status(200).json(bookcustomer)
  } catch (err) {
    res.status(401).json(`request failed to ${err} `)
    
  }
}


//delete book
exports.deleteBook = async(req,res)=>{
  const{id}=req.params
  try {
    const removebook =await bookingusers.findByIdAndDelete({_id:id})
    res.status(200).json(removebook)
    
  } catch (err) {
    res.status(401).json(err)
  }
}