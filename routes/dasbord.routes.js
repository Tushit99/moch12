const express = require("express");
const { Employmodel } = require("../models/dashboard.models");
const empRoute = express.Router();

empRoute.get("/", async (req, res) => {
  try {
    let data = await Employmodel.find(req.query);
    res.status(200).send({ message: data, success: 0 });
  } catch (err) {
    res.send({ message: "Somthing went wrong", success: 1 });
  }
});

empRoute.post("/add", async (req, res) => {
  const { First_Name, Last_Name, Email, Department, Salary } = req.body;

  if (First_Name && Last_Name && Email) {
    let data = await Employmodel({
      First_Name,
      Last_Name,
      Email,
      Department,
      Salary,
    });
    await data.save();
    res.send({ message: "Data Saved Successfull", success: 0 });
  } else {
    res.send({ message: "Please fill all required fields", success: 1 });
  }

}); 

empRoute.patch("/:id",async(req,res)=>{
    const {id} = req.params;  
    let data = req.body; 
    try{
        await Employmodel.findByIdAndUpdate({_id:id}, data);  
        res.send({message: "Employes data Updated Succesfull"});  
    }
    catch(err){
        res.send({message: "Something went wrong"}); 
    }
})



empRoute.delete("/:id",async(req,res)=>{
    const {id} = req.params;  
    try{
        await Employmodel.findByIdAndDelete({_id:id}); 
        res.send({message: "Employes data deleted Succesfull"});  
    }
    catch(err){
        res.send({message: "Something went wrong"}); 
    }
})


module.exports={
    empRoute
}

