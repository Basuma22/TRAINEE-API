const express = require("express");
const  { get } = require("mongoose");
const {createTrainee, getAllTrainees, getSingleTrainee, updateTrainee, deleteTrainee}= require("./controllers/traineesControllers");

const router = express.Router();

router.route("/").post(createTrainee).get(getAllTrainees)
router.route("/:_id").get(getSingleTrainee).put(updateTrainee).delete(deleteTrainee)
module.exports = router;