import mongoose, {Schema} from 'mongoose';

const circuitrixSchema = new Schema({
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
        trim: true
    },
    member2Email: {
        type: String,
        lowercase: true,
        trim: true
    },
    member2Phone: {
        type: String,
        maxlength : 10
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
        type: String,
        maxlength : 10
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
        maxlength : 10
    }
})

export const Circuitrix = mongoose.model('Circuitrix', circuitrixSchema);