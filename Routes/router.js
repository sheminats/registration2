const  express=require('express')
const studentController =require('../Controllers/studentController')



const router=new express.Router()

//register api
router.post('/registration',studentController.register)

//get full details
router.get('/dashboard',studentController.getallDetails)

module.exports=router
