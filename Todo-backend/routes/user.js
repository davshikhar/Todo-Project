const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const z = require('zod');
const bcrypt = require('bcrypt');
const { User, UserModel } = require("../database");
require('dotenv').config();
// const secret = "123random";

const schema = z.object({
    email:z.email({message:"Invalid email address"}),
    name:z.string().min(3,{message:"Username cannot be less than 3"}).max(50,{message:"Username cannot be more that 50"}),
    password:z.string().min(3,{message:"Password is too small"}).regex(/^[a-zA-Z0-9_!@#$%^&*(),.?":{}|<>]+$/,{message:"Password must contain various characters"})
});



// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const user = schema.safeParse(req.body);

    if(!user.success){
        res.status(401).json({error:userSchema.error.errors});
    }

    const {email,name,password} = user.data;

    const hashedPassword = await bcrypt.hash(password, 3);

    await UserModel.create({
        email:email,
        name:name,
        password:hashedPassword
    });

    return res.status(200).json({message:"You are signed up!"});

});

router.post('/login', async (req, res) => {
     // Implement user login logic
    const user = schema.safeParse(req.body);

    if(!user.success){
        res.status(401).json({message:"Please enter the data correctly!"});
    }

    const {email,name,password} = user.data;

    const result = await User.findOne({email:email});
    
    if(!result){
        return res.status(401).json({message:"User does not exist"});
    }

    const passwordMatch = await bcrypt.compare(password,result.password);

    if(passwordMatch){
        const token = jwt.sign({
            id:result._id.toString()
        },secret);
        return res.json({message:"You are logged in",token:token});
    }
    else{
        res.status(403).json({message:"Your password does not match"});
    }
});

router.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = router