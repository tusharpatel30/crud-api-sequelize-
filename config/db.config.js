const Sequelize=require("sequelize")


const sequelize = new Sequelize('firstdb', 'root', '', {
    host: 'localhost',
    dialect: "mysql",
    define:{
      timestamps:false
    }
  });



  module.exports=sequelize;




