const Trainee = require("../models/traineesSchema");

//adding trainee

const createTrainee = async (req, res) => {
  const newTrainee = new Trainee({
    name: req.body.name,
    destination: req.body.destination,
    email: req.body.email,
    dob: req.body.dob,
  });

  await newTrainee.save();
  res.status(200).json(newTrainee);
};
// get all trainees
const getAllTrainees = async (req, res) => {
  const trainees = Trainee.find();
  res.json(trainees);
};
// get a trainee
const getSingleTrainee = async (req, res) => {
  const trainee = await Trainee.findBYId(req.params_id);
  res.json(trainee);
};
// update a trainee
const updateTrainee = async (req, res) => {
  const foundTrainee = await Trainee.findById(req.params._id);
  res.json(trainee);
  if (foundTrainee) {
    (foundTrainee.name = req.body.name),
      (foundTrainee.destionation = body.destination),
      (foundTrainee.email = req.body.email),
      (foundTrainee.dob = req.body.dob);

    const updatedTrainee = await foundTrainee.save();
    res.json({ updatedTrainee });
  }

};
//delete a trainee
const deleteTrainee = async (req, res)=> {
    const foundTrainee = await Trainee.findBYId(req,params._id)
    if (foundTrainee) {
        foundTrain.remove()
        res.json({msg:`${foundTrainee.name} removed`})

    }else {
        res.status(404).json({error:"Trainee notfound"});
    }
}

module.exports = {
  createTrainee,
  getAllTrainees,
  getSingleTrainee,
  updateTrainee,
  deleteTrainee,
};
