const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 6000;

const app = express();

app.get("/", (req, res) => {
  res.status(202).json({ message: "Welcome to service Assist" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
