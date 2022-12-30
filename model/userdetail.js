const Sequelize=require("sequelize")
const sequelize=require("../config/db.config");
const user_address = require("./address");

const user_detail=sequelize.define('user_detail',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
  
    user_addressId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        foreignkey:true,
        references:{
            model:'user_address',
            key:'id'
        }
        
    },
    country:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    pincode:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },

})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

module.exports=user_detail;