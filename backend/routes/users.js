import express from 'express';
import User from '../models/User.js';

const router = express.Router();

//create a user
router.post( "/", async (req,res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {

    }
})

export default router;