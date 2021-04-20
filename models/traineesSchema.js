const mongoose = require("mongoose");
const { getSingleTrainee } = require("../config/traineeControllers");

const TraineeSchema=mongoose.Schema({
    name: {
        type: String,
        required: true


    },
    destination: {
        type: String,
        required: true,


    },
    email: {
        type: String,
        require: true
    },
    dob: {
        type: String,
   },
}, {
    timestamps: true,
}
),

const Trainee = mongoose.model("Trainee", TraineeSchema)
module.exports=Trainee;

