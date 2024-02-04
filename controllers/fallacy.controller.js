import { json } from 'express';
import {Fallacy} from '../models/fallacy.model.js';

const fallacyRegistration = async (req,res)=>{
    try {
        const {teamName, member1Name, member1Email, member1Phone, member2Name, member2Email, member2Phone} = req.body;
        const team =new Fallacy({teamName, member1Name, member1Email, member1Phone, member2Name, member2Email, member2Phone});
        const savedTeam = await team.save();
        res.status(201).json({status: true,message: 'Registered Successfully!!'});
    } catch (error) {
        console.log(error);
        res.status(500).json({status:false, message: 'Registration Failed!!'});
    }
}

export default fallacyRegistration;