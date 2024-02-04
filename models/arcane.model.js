import mongoose, {Schema} from 'mongoose';

const arcaneSchema = new Schema({
    name: {
        require:true,
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        require:true,
        type: String,
        lowercase: true,
        trim: true
    },
    phoneNumber: {
        require : true,
        type: String,
        minlength : 10,
        maxlength : 10
    }
})

export const Arcane = mongoose.model('Arcane', arcaneSchema);