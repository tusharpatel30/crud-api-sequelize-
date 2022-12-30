const Sequelize=require("sequelize")
const sequelize=require("../config/db.config")

const user=sequelize.define('user',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    phone_number:{
        type:Sequelize.INTEGER,
        allowNull:false,

    },
    age:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    gender:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    birth_date:{
        type:Sequelize.DATE,
        allowNull:false,

    },
    password:{
        type:Sequelize.STRING,
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

module.exports=user;

