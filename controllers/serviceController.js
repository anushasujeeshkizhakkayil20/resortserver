//import services model
const serviceusers =require('../Modals/serviceSchema')


exports.addServices =async(req,res)=>{
    console.log('inside a service controller');
    const  userId=req.payload
    console.log(userId);

    const serviceImage = req.file.filename
   console.log(serviceImage);
    const{title,status}=req.body
    console.log(`${title},${status},${serviceImage},${userId}`);
   
   try {
    const existingService = await serviceusers.findOne({status})
     

   if(existingService){
     res.status(406).json("service alerady exist...please add new facilities")
   }
   else{
     const newService = new serviceusers({
         title,status,serviceImage,userId
     })
     await newService.save()
     res.status(200).json(newService)
   }

    
   } catch (err) {
     res.status(401)(`request failed due to ${err}`)
   }
}


//get add services
exports.getserviceResort = async(req,res)=>{
  try {
    const serviceResort = await serviceusers.find()
  res.status(200).json(serviceResort)
    
  } catch (err) {
    res.status(401).json(`Request failed due to ${err}`)
  }
}

//get serviceuser
exports.getserviceuser = async(req,res)=>{
  try {
   
    const serviceUser = await serviceusers.find()
  res.status(200).json(serviceUser)

    
  } catch (err) {
    res.status(401).json(`Request failed due to ${err}`)
  }
}

//delete service
exports.deleteUserService =async(req,res) =>{
   const {id} =req.params
   try {
    const removeService = await serviceusers.findByIdAndDelete({_id:id})
    res.status(200).json(removeService)
    
   } catch (err) {
    res.status(401).json(err)
   }
}