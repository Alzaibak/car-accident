// User login and register file 
const router = require("express").Router();
const user = require("../Models/USER");
// New user registration

// user Login (user request like typing email or username (req) server respone (res))
router.post("login", async (req, res)=>{
    try {
                // 1. searching user in database
        const userInfo = await user.findOne({email: req.body.email});
        const userPassword = userInfo.password;
        if(userPassword == req.body.password && userInfo.email == req.body.email) {
            // 3. User id verification using JWT
        // 4. Sending user information
        res.status(200).json({userInfo});
        }else{
         res.status(401);
         //res.status(401).json("Wrong email or password");
        }
    } catch (error) {
        res.status(500);
        //res.status(500).json("Unexpected error produced please try again later");
    }
})

module.exports = router;
