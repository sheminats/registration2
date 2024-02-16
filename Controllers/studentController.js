const students=require('../Models/studentModel')


exports.register=async(req,res)=>{
    console.log("INSIDE REGISTER API");
    const {firstname,lastname,address,email,gender,mobile,password,dateofbirth,course}=req.body
    console.log(req.body);
    // res.status(200).json("register request received")
    try{
const existingStudent=await students.findOne({email})
console.log(existingStudent);
// res.status(200).json("Register request received")
const newStudent=new students({
    firstname,lastname,address,email,gender,mobile,password,dateofbirth,course
})
await newStudent.save()
res.status(200).json(newStudent)


    }catch(err){
        res.status(401).json(err)
    }

}
//get all details
exports.getallDetails=async(req,res)=>{
    try{
        const alldetails=await students.find()
        res.status(200).json(alldetails)
    }catch(err){
        res.status(401).json(err)
    }
}