import mongoose, {Schema} from 'mongoose';

const fallacySchema = new Schema({
    teamName:{
        type: String,
        lowercase: true,
        trim: true
    },
    member1Name: {
        type: String,
        lowercase: true,
        trim: true
    },
    member1Email: {
        type: String,
        lowercase: true,
        trim: true
    },
    member1Phone: {
        type: Number
    },
    member2Name: {
        type: String,
        lowercase: true,
        trim: true
    },
    member2Email: {
        type: String,
        lowercase: true,
        trim: true
    },
    member2Phone: {
        type: Number
    }
})

export const Fallacy = mongoose.model('Fallacy', fallacySchema);