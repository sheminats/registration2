require('dotenv').config()

const express = require("express")
const cors = require("cors")
const router=require('./Routes/router')
require('./DB/connection')



//to create express server
const rtServer=express()


//use corse in server
rtServer.use(cors())

//use json parser---------application specific middleware
rtServer.use(express.json())

rtServer.use(router)

const PORT=3000 ||process.env.PORT

//to host created server(pfServer)
rtServer.listen(PORT,()=>{
    console.log(`Register server Started at PORT:${PORT}`);
})


//to resolve get http request to http://localhost:3000/
rtServer.get('/',(req,res)=>{
res.send("<h1 style=color:red;>Register Server Started...And waiting for client request</h1>")
})

