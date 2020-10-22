const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()
const db = require("./models")
const logger = require("morgan")

const PORT = process.env.PORT || 3000;
app.use(logger("dev"))
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true , useUnifiedTopology:true})










app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });