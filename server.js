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
  db.Workout.find({}).then(dbWorkout=>{
    res.json(dbWorkout)
  })
})
app.put("/api/workouts/:param", (req,res)=>{
  let param = req.params.param
  console.log(param)
  console.log(req.body)

  db.Workout.findByIdAndUpdate({_id:param},{$push:{exercises:req.body}}).then(dbWorkout=>{
    res.json(dbWorkout)
  }).catch(err=>{
    res.json(err)
  })

})

app.post("/api/workouts",(req,res)=>{
console.log("post")
console.log(req.body)
db.Workout.create({day: new Date(new Date().setDate(new Date().getDate())), exercises:[]}).then(dbWorkout=>{
  res.json(dbWorkout)
})
.catch(err=>{
  res.json(err)
})
})
app.get("/api/workouts/range", (req,res)=>{
console.log("get range")
db.Workout.find({}).then(dbWorkout=>{
  res.json(dbWorkout)
})
})
//api routes
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });