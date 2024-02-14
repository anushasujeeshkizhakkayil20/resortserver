//import resortcontroller
const resorts =require('../Modals/resortSchema')



exports.addResort =async(req,res)=>{
    console.log('inside the project controller');
    const userId =req.payload
    console.log(userId);

    const resortImage = req.file.filename
    console.log(resortImage);
    const {title,name,days,rate}=req.body
    console.log(`${title} ,${name},${days},${rate},${resortImage},${userId}`);

    try {
        
        const existingResort = await resorts.findOne({name})
        if(existingResort){
            res.status(406).json('Resort already exist...please add nre resort')
        }
        else{
            const newResort =new resorts({
                title,name, days, rate,resortImage, userId
            })
            await newResort.save()
            res.status(200).json(newResort)
        }
    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
    }
    
}

//home resort
exports.gethomeResort =async(req,res)=>{
     try {
        const homeResort =await resorts.find().limit(4)
     res.status(200).json(homeResort)
     } catch (err) {
        res.status(401).json(`Request failed due to${err}`)
     }
}

//get all resort

exports.getallResort=async(req,res)=>{
    const searchKey = req.query.search
    console.log(searchKey);
        const query={
            name:{
                $regex:searchKey,$options:'i'
            }
        }
    try {
       const allResort =await resorts.find(query)
    res.status(200).json(allResort)
    } catch (err) {
       res.status(401).json(`Request failed due to${err}`)
    }
}







// exports.getallResort=async(req,res)=>{
    
        
//     try {
//        const allResort =await resorts.find()
//     res.status(200).json(allResort)
//     } catch (err) {
//        res.status(401).json(`Request failed due to${err}`)
//     }
// }

//userResort
exports.getUserResort = async(req,res)=>{
    try {
        const userId = req.payload
        const userResort = await resorts.find({userId})
        res.status(200).json(userResort)
    } catch (err) {
        res.status(401).json(`Request failed due to${err}`) 
    }
}

//edit user resort
exports.editUserResort =async(req,res)=>{
    const {id} =req.params
    const userId = req.payload
    const {title,name,days,rate,resortImage}=req.body
     const uploadedResortImage =req.file?req.file.filename:resortImage

     try {
        const updateResort =await resorts.findByIdAndUpdate({_id:id},{title,name,days,rate,resortImage:uploadedResortImage,userId},{new:true})
        await updateResort.save()
        res.status(200).json(updateResort)
     } catch (err) {
       res.status(401).json(err)
     }

}

//delete user resort
exports.deleteUserResort = async(req,res)=>{
    const  {id} =req.params
    try {
        const removeResort =await resorts.findByIdAndDelete({_id:id})
        res.status(200).json(removeResort)
        
    } catch (err) {
        res.status(401).json(err)
        
    }
}
