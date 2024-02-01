import mongoose, {Schema} from 'mongoose';

const reckonSchema = new Schema({
    leaderName: {
        type: String,
        lowercase: true,
        trim: true
    },
    leaderEmail: {
        type: String,
        lowercase: true,
        trim: true
    },
    leaderPhone: {
        type: Number,
    },
    teamName: {
        type: String,
        lowercase: true,
        trim: true,
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
    },
    member3Name: {
        type: String,
        lowercase: true,
        trim: true
    },
    member3Email: {
        type: String,
        lowercase: true,
        trim: true
    },
    member3Phone: {
        type: Number
    },
    member4Name: {
        type: String,
        lowercase: true,
        trim: true
    },
    member4Email: {
        type: String,
        lowercase: true,
        trim: true
    },
    member4Phone: {
        type: Number
    }
})

export const Reckon = mongoose.model('Reckon', reckonSchema);