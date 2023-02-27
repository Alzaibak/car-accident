// express, mongodb server import 
const express = require("express");
const app = express();
const moongose = require("mongoose");
const dotenv = require("dotenv");
const authenticationUser = require("./routes/authentication");


const cors = require("cors");

dotenv.config();

// mongoDb database liniking
moongose
.connect(process.env.MONGO_URL)
.then (()=> console.log("DB connection Done")).catch((err)=>console.log("Connection impossible with DB Database"));

// allow Localhost access to fetch data by react 
app.use(cors());

// routs liniking and using
app.use(express.json());
app.use("/api/auth", authenticationUser);
//app.use("/api/cart", cartRoute);

//Server connection
app.listen(process.env.PORT || 5000,() =>{
    console.log("connected")
})
