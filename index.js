const express=require("express");
const app=express()

var router=express.Router();


app.use(express.urlencoded({extended:false}));
app.use(express.json())

require("./routes/routes")(app)
db={}




app.listen(4000,()=>{
    console.log("server running on port:4000");
})

const sequelize=require("./config/db.config");

const user = require("./model/user");
user.sync()

const user_address = require("./model/address");
user_address.sync({force:false})

const user_detail=require("./model/userdetail")
user_detail.sync()



 user.hasOne(user_address);
 user_address.belongsTo(user);

// user.belongsToMany(user_address,{through:'user_detail'})
// user_address.belongsToMany(user,{through:'user_detail'})

user.hasMany(user_address);
user_address.hasMany(user_detail);
