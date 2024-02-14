//import sight model
const seens = require('../Modals/sightSchema')

exports.addSight =async(req,res)=>{

    console.log('inside the sight controller');
    userId = req.payload
    console.log(userId);

    const sightImage = req.file.filename
    console.log(sightImage);
    
    const{title,overview} =req.body
    console.log(`${title},${overview},${sightImage},${userId}`);

    try {
        const existingSightview =await seens.findOne({overview})
    if(existingSightview){
        res.status(406).json('sight already exist...please add new sight')
    }
    else{
         const newsight =new seens({
            title,overview,sightImage,userId
         })
         await newsight.save()
         res.status(200).json(newsight)
        }
    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
    }
    }

   
//get sightviews
exports.getsightseen =async(req,res)=>{
  try {
    const sightseen =await seens.find()
    res.status(200).json(sightseen)
  } catch (err) {
    res.status(401).json(`request failed due to ${err}`)
  }
}
