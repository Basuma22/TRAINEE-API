const express = require("express");
const router = express.Router();
const {
    createTrainee,
    getAllTrainees,
    getSingleTrainee, updateTrainee, deleteTrainee

} = require("../controllers/traineesControllers");


router.route("/").post
(createTrainee).get(getAllTrainees);
router.route("/:_id").get(getSingleTrainee).put(updateTrainee
    )
    module.exports = router;