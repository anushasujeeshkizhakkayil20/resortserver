//logic to resolve the request
//import model
const users = require('../Modals/userSchema')

//import jwt
const jwt =require('jsonwebtoken')

//logic for the register
exports.register =async(req,res)=>{
    
    console.log('inside controller register function');
       //extract data from req body
       const{username,email,password}=req.body
    try{const existUser = await users.findOne({email})
      if(existUser){
        res.status(406).json('Account already exist.......please Login')
      }
      else{
           //create an object for the model
           const newUser = new users({
            username,
            email,
            password,
            instagram:"",
            gmail:"",
            profile:"",
          

           })
           //save in fun mongoose -to permentely store  the data in mongodb
         await  newUser.save()
          //response 
      res.status(200).json(newUser)
      }}
      catch(err){
       res.status(401).json('Register Request failed due to',err);
      }
    
}

//logic of login
exports.login = async(req,res)=>{
  console.log('inside the controller login function');
  const {email,password}=req.body
 try {const existingUser = await users.findOne({email,password})
  console.log(existingUser);

  if(existingUser){
    const token =  jwt.sign({userId:existingUser._id},"supersecretekey12345")
    res.status(200).json({
      existingUser,
      token
    })
  }
  else{
     res.status(406).json('incorrect email or password')
  }}catch(err){
     res.status(401).json(`login failed due to ${err}`)
  }
}