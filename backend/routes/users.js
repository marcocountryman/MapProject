import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

//signup a user
router.post( "/signup", async (req,res) => {
    
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        

        const savedUser = await newUser.save();
        res.status(200).json(savedUser.username);
    } catch (error) {
        res.status(500).json(error)
    }
})
//login
router.post("/login", async (req, res) => {
    try {
       
        //Find user in database
        const user = await User.findOne({username: req.body.username})
        if (!user) {
            res.status(400).json("Wrong credentials dawg, try again")
        }
        
        //Check to see if password matches
        const validPassword = await bcrypt.compare(
            req.body.password, 
            user.password
        );
        if (!validPassword) {
            res.status(400).json("Wrong credentials dawg, try again");
        }
        res.status(200).json({ _id: user._id, username: user.username });
    } catch(error) {
        res.status(500).json(error);
    }
})

export default router;