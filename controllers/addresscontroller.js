var app=require("express")
const config=require("../config/db.config");
const user_address = require("../model/address");
const user = require("../model/user");
const user_detail = require("../model/userdetail");
//var db=require("../model");
// const user=db.user;
// const user_address=db.user_address;



exports.insertdetail= async function(req,res){
    console.log(req.body);

    let data = {
        userId: req.body.userId,
        address: req.body.address,
        city: req.body.city,
        pincode: req.body.pincode
       

      };    
    
      // Save in the database
      user_address.create(data)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user."
          });
        });

}



exports.OnetoOne=async (req,res)=>{
      
  let data=await user.findAll({
    include:user_address,
    where:{id:1}
  });
  res.status(200).json(data);
}


exports.mtom = async (req,res) =>{
      const data =await user.findOne({
          where: {
              id: req.params.id
          },
          include:{
              model:user_address,
             // model:details
              include:[
                  {
                      model:user_detail,
                      through:{attributes: []}
                  },
                      
              ]
          }
          
      });
      res.status(200).json({data:data});
  }