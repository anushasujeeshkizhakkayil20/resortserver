//to setup path to request
//1)import express
const express = require('express')

//import controller
const userController = require('../controllers/userController')

//import controller
const bookingController = require('../controllers/bookingController')

//import resortcontroller
const resortController =require('../controllers/resortController')

//import serviceController
const serviceController = require('../controllers/serviceController')

//import sightcontroller
const sightController = require('../controllers/sightController')

//import jwt middleware
const jwtMiddleware =require('../Middleware/jwtMiddleware')

//import multer
const multerConfig = require('../Middleware/multerMiddleware')
const multer = require('multer')



//2)create an obj for the Router class in the request module
const router = new express.Router()

//3)path to resolve the request
//syntax-router.httpreq(`path`,()=>{how to solve})
//a)register
router.post('/user/register',userController.register)
//b)login
router.post('/user/login', userController.login)

//c)booking register
router.post('/book/register', bookingController.bookregister)
//booking login
router.post('/book/login',bookingController.booklogin)




//add router
router.post('/resort/add',jwtMiddleware,multerConfig.single('resortImage'),resortController.addResort)
//home resort
router.get('/resort/home-resort',resortController.gethomeResort)

//all-resort get
router.get('/resort/all-resort',resortController.getallResort)

//userResort
router.get('/user/allresort',jwtMiddleware,resortController.getUserResort)

//edit resort
router.put('/resort/edit/:id',jwtMiddleware,multerConfig.single('resortImage'),resortController.editUserResort)
//delete resort
router.delete('/resort/remove/:id',jwtMiddleware,resortController.deleteUserResort)

//add servicse
router.post('/serviceusers/add',jwtMiddleware,multerConfig.single("serviceImage"),serviceController.addServices)
//get services
router.get('/serviceusers/service-user',serviceController.getserviceResort)
//service user
router.get('/serviceusers/allservice',serviceController.getserviceuser)
//service delete
router.delete('/serviceusers/remove/:id',jwtMiddleware,serviceController.deleteUserService)
//sight Add
router.post('/seens/add',jwtMiddleware,multerConfig.single("sightImage"),sightController.addSight)
//sight get
router.get('/seens/sightview',sightController.getsightseen)


//bookget
router.get('/book/bookcustom',bookingController.getbooking)
//delete book
router.delete('/book/remove/:id',jwtMiddleware,bookingController.deleteBook)


//4)export router
module.exports =router