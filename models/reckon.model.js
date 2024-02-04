import mongoose, {Schema} from 'mongoose';

const reckonSchema = new Schema({
    leaderName: {
        type: String,
        lowercase: true,
        trim: true,
        require:true
    },
    leaderEmail: {
        type: String,
        lowercase: true,
        trim: true,
        require:true
    },
    leaderPhone: {
        require : true,
        type: String,
        minlength : 10,
        maxlength : 10
    },
    teamName: {
        type: String,
        lowercase: true,
        trim: true,
        require:true
    },
    member2Name: {
        type: String,
        lowercase: true,
        trim: true,
        require:true
    },
    member2Email: {
        type: String,
        lowercase: true,
        trim: true,
        require:true
    },
    member2Phone: {
        type: String,
        minlength : 10,
        maxlength : 10,
        require:true
    },
    member3Name: {
        type: String,
        lowercase: true,
        trim: true,
        require:true
    },
    member3Email: {
        type: String,
        lowercase: true,
        trim: true,
        require:true
    },
    member3Phone: {
        type: String,
        minlength : 10,
        maxlength : 10,
        require:true
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
        type: String,
        minlength : 10,
        maxlength : 10
    }
})

export const Reckon = mongoose.model('Reckon', reckonSchema);