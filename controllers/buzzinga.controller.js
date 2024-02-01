import {Buzzinga} from '../models/buzzinga.model.js';

const buzzingaRegistration = async (req, res) => {
    const {leaderName, leaderEmail, leaderPhone, teamName, member2Name, member2Email, member2Phone, member3Name, member3Email, member3Phone, member4Name, member4Email, member4Phone} = req.body;
    try {
        const team = new Buzzinga({leaderName, leaderEmail, leaderPhone, teamName, member2Name, member2Email, member2Phone, member3Name, member3Email, member3Phone, member4Name, member4Email, member4Phone});
        const savedTeam = await team.save();
        res.status(201).json({ message: 'Registered Successfully.'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Registration Failed!!` });
    }
}

export default buzzingaRegistration;