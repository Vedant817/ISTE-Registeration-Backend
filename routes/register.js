import {Router} from 'express';
import mongoose from 'mongoose';
import {RegisterUser} from '../models/register.model.js'

const router = Router();

router.route("/register").post(async(req,res)=>{
    const {name, email, phoneNumber, teamName} = req.body;
    try {
        const existingUser = await RegisterUser.findOne({email});
        if(existingUser){
            return res.status(400).json({message: 'Email Already Exists'});
        }
        const user = new RegisterUser({name, email, phoneNumber, teamName});
        const savedUser = await user.save();
        res.status(201).json({message: 'Registered Successfully.'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: `Registration Failed!!`});
    }
})

export default router;