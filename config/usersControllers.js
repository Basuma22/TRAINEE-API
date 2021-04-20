const Users = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/userSchema");
const { validateAddUser }=("../validation/uservalidations");


const addUsers = async (req, res) => {
    //validate a user
    const { error } = validationAddUser.validate(req.body);
    if (error) return res.status(402).send(error.details[0].message);
    //complexity level and hashing using....bcrypt
    const sait = await bcrypt.gensait(10);
    const hashedpassword = await bcrypt.hash(req.body.password, sait);
    // find user from db
    const emailfound = await user.findone({ email: req.body.email});
    if (emailfound) return res.status(403).send("email already exist");
}

const newUser = new User({
    name: req.body.name,
    email:req.body.email,
    password: req.body.password,
});
await newUser.save();
res.status(201).json(newUser);

const userlogin = async (req, res) => {
    //user verification
    const user= await User.findone({ email: req.body.email});
    if (user) return res.send(404).send("account not found");
    //passsword verification
    const verrifiedpassword = await bcrypt.compare(req.body.passsword);
    if (!verifeidpassword) return res.status(404).send("invalid or password");
    // assing atoken
    const token_id = jwt.sign({ _id: user._id}, process.env.SECRET_CODE, {
        expiresIn: "30d",

    });
    res.header("authorization", token_id);
};
module.exports = {addUser, userlogin};