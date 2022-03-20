const authormodel = require('../model/authorModel');
const jwt = require('jsonwebtoken')

const loginAuthor = async function(req,res){
   try{
    let authorEmail = req.body.email;
    let authorpassword = req.body.password;
    
    let isAuthorPresent = await authormodel.findOne({email:authorEmail,password:authorpassword})

    if(!isAuthorPresent){
        res.status(401).send({msg:"Author is not present"})
    }

    let token = jwt.sign({
        authorId:isAuthorPresent._id.toString(),
        fullName:`${isAuthorPresent.fName} ${isAuthorPresent.lName}`
    },"Ashis-Auth");

    res.setHeader("x-api-key",token)
    res.send({"x-api-key":token});
    


   }catch(err){
       res.status(404).send({"Error Message":err.message})
   }
}

module.exports.loginAuthor = loginAuthor