// workout file goes here
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day: Date,
    exercises: Array
},
{
    toObject:{
        virtuals:true
    },
    toJson:{
        virtuals:true
    }
}
)
// .virtual('TotalDuration').get(function(){
//     let duration = []
//     this.exercises.forEach(item =>{
//         duration.push(item.duration)
//     })
//     return duration.reduce((a,b)=> a+b,0)
// })

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout