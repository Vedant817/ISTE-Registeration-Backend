import {Arcane} from '../models/arcane.model.js';

const arcaneRegistration = async (req, res)=>{
    try {
        const {name, email, phoneNumber} = req.body;
        const player = new Arcane({name, email, phoneNumber});
        const savedPlayer = await player.save();;
        res.status(201).json({message: 'Registered Successfully!!'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Registration Failed!!'});
    }
}

export default arcaneRegistration;