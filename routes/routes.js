const express=require("express")
const router=express.Router();
const usercontroller=require("../controllers/usercontroller")
const addresscontroller=require("../controllers/addresscontroller")

module.exports=(app)=>{

    app.post('/insert',usercontroller.Insert)
    app.get('/alldata',usercontroller.alldata)
    app.get('/findone/:id',usercontroller.findone)
    app.patch('/update/:id',usercontroller.update)
    app.post('/delete/:id',usercontroller.delete)

    //app.get('/onetoone',usercontroller.OnetoOne)
    app.post('/insertdetail',addresscontroller.insertdetail)
    app.get('/onetomany',usercontroller.Onetomany)
    app.get('/onetoone/:id',usercontroller.Onetoone)
    app.get('/change/:id',usercontroller.change)
    app.get('/manytomany/:id',usercontroller.manytomany)
    app.get('/mtom',addresscontroller.mtom) 

}