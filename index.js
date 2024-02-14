//1)import dot env
require('dotenv').config()

//2)import express
const express = require('express')

//3)import cors
const cors = require('cors')
//import router
const router = require('./Routing/router')


//import connection.js
require('./DB/connection')

//4)create server
const reServer =express()

//5)use of cors by server
reServer.use(cors())

//6)json parsing
reServer.use(express.json())

//server using router
reServer.use(router)

//upload use upload folder
//secod arg to export that particular folder.static
reServer.use('/uploads',express.static('./uploads'))




//7)customize port -byedefault -server running at 3000
const PORT= 4038 || process.env

//8)run server
reServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING AT PORT NUMBER 4038 ${PORT}`);
})

//get request
 reServer.get('/',(req,res)=>{
    res.send(`<h1 style="color:blue">resort project server running successfully and ready accept client request </h1>`)
 })
   
/* post request
 //reServer.post('/',(req,res)=>{
  // res.send(`post request`)
 //})
//put request
//reServer.put('/',(req,res)=>{
 //   res.send(`put request`)
// })*/

