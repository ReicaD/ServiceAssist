const express = require("express");
const colors = require("colors")
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB=require("./config/db")
//connect to DB
connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to service Assist" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
