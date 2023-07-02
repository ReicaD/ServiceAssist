const asyncHandler = require("express-async-handler")

//registering the new user
//@ route api/users
//@#access Public
const registerUser = asyncHandler (async(req, res) => {
     const {name,email,password} = req.body

    //  validation
    if(!name || !email || !password)  {
   return res.status(400).json({message: "missing fields"})
}

  res.send("Register Route");
});

// login a user
//@route api/users/login
// @access public
const loginUser = asyncHandler (async(req, res) => {
  res.send("Login Route");
});
module.exports = {
  registerUser,
  loginUser,
};
