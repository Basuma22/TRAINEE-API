const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB= require("./config/connectDB")
const traineeRoute = require("./routes/traineesConrollers");
const userRoute = require("./routes/usersRoute")

dotenv.config();

const app = express();

// conection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v3/trainee", traineesRoute);
app.use("/api/v3/user", Route);

//home route
app.get("/", (req, res) => {
    res.send("<h1>WELCOME TO TRAINEES API</h1");
});

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on port ${port}`)); 