const Sequelize=require("sequelize")
const sequelize=require("../config/db.config")


const user_address=sequelize.define('user_address',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        foreignkey:true,
    },

    
    address:{
        type:Sequelize.STRING,
        allowNull:false,
    },
   
    city:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    pincode:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

module.exports=user_address;