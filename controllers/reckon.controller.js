import {Reckon} from '../models/reckon.model.js';

const reckonRegistration = async (req, res) => {
    const {leaderName, leaderEmail, leaderPhone, teamName, member2Name, member2Email, member2Phone, member3Name, member3Email, member3Phone} = req.body;
    try {
        const team = new Reckon({leaderName, leaderEmail, leaderPhone, teamName, member2Name, member2Email, member2Phone, member3Name, member3Email, member3Phone});
        const savedTeam = await team.save();
        res.status(201).json({status: true,message: 'Registered Successfully!!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({status:false, message: 'Registration Failed!!'});
    }
}

export default reckonRegistration;