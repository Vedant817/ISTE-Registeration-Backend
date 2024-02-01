import mongoose, {Schema} from 'mongoose';

const arcaneSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true
    },
    phoneNumber: {
        type: Number
    }
})

export const Arcane = mongoose.model('Arcane', arcaneSchema);