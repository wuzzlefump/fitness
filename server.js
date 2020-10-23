const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()
const db = require("./models")
const logger = require("morgan")
const path = require("path")

const PORT = process.env.PORT || 3000;
app.use(logger("dev"))
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true , useUnifiedTopology:true})

//htmlroutes
app.get("/", (req,res)=>{
  res.send(index.html)
})

app.get("/exercise", (req,res)=>{
  res.sendFile(path.join(__dirname,"./public/exercise.html"))
})

app.get("/stats",(req,res)=>{
  res.sendFile(path.join(__dirname, "./public/stats.html"))
})
//html routes
//api routes
app.get("/api/workouts",(req,res)=>{
  console.log("get")
})
app.put("/api/workouts/:obid", (req,res)=>{
  console.log("put")
})
app.post("/api/workouts",(req,res)=>{
console.log("post")
})
app.get("/api/workouts/range", (req,res)=>{
console.log("get range")
})
//api routes
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });