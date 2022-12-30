var app=require("express")();
const  config=require("../config/db.config")
const user=require("../model/user")


const bcrypt=require("bcrypt");
const user_address = require("../model/address");

exports.Insert= async function(req,res){
    console.log(req.body);
    const password=req.body.password;
    const encryptedPassword = await bcrypt.hash(password, 10);
    let userdata = {
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        age: req.body.age,
        gender: req.body.gender,
        birth_date: req.body.birth_date,
        password:encryptedPassword

      };    
    
      // Save in the database
      user.create(userdata)
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

exports.alldata=async function(req,res){
  console.log(req.body);
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  user.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error"
      });
    });
}

exports.findone=async function(req,res){
  const id = req.params.id;

  user.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error =" + id
      });
    });
}

exports.update=async function(req,res){
  const id = req.params.id;

  user.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update id=${id}. Maybe req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating with id=" + id
      });
    });
}

exports.delete=async function(req,res){
  const id = req.params.id;

  user.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete with id=${id}.  was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete with id=" + id
      });
    });
}

 exports.Onetomany=async (req,res)=>{

  var data =await user.findAll({
  include:user_address
})

 res.status(200).json({data:data});
}

exports.change=async (req,res)=>{

  var data =await user_address.findOne({
  include:user,
  where: {
    id: req.params.id
}
})

 res.status(200).json({data:data});
}

exports.Onetoone=async (req,res)=>{

  var data =await user.findOne({
  include:user_address,
  where: {
    id: req.params.id
}
})
 res.status(200).json({data:data});
}

exports.manytomany  =async(req,res)=>{
  var data = await user.findAll({
     
      include:[{
          model:user_address,
          }],
      where: {
          id: req.params.id
      }
  })
  res.status(200).json({data:data});
  }
 


      
