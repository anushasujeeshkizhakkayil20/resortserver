//import mongoose
const mongoose = require('mongoose')

//get a connection string
const connectionString = process.env.DATABASE
/*console.log(connectionString);*/


mongoose.connect(connectionString).then(()=>{
    console.log('server connected successfully with mongodb');
}).catch((err)=>{
    console.log(`mongodb failed to connect due to :${err}`);
})