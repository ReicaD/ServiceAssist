//registering the user
const registerUser= (req,res) =>{
    res.send("Register Route")
}

//login user
const loginUser=(req,res)=>{
    res.send("Login Route")
}
 module.exports={
     registerUser,
     loginUser,
 }