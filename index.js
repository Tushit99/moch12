const express = require("express"); 
const { connection } = require("./db");
const { userRoute } = require("./routes/user.routes");
require("dotenv").config(); 
const cors = require("cors"); 
const { empRoute } = require("./routes/dasbord.routes");

const app = express(); 
app.use(express.json()); 
app.use(cors()); 


app.use("/user",userRoute); 
app.use("/dashbord",empRoute)


app.listen(process.env.port, async()=>{
    try{
        await connection;  
        console.log("Connected to the Data Base")
    }
    catch(err){
        console.log("Data connection Failed")
    }
    console.log("Port is Running on port",process.env.port)
})




