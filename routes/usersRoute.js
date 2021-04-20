
const  express = require("express");
const { addUser, Userlogin } = require("../controllers/usersControllers");

const router = express.Router();

route.route("/register").post(addUser);
router.route("/Login").post(userLogin);
module.exports = router;

