import mongoose, {Schema} from 'mongoose';

const fallacySchema = new Schema({
    teamName:{
        require : true,
        type: String,
        lowercase: true,
        trim: true
    },
    member1Name: {
        require : true,
        type: String,
        lowercase: true,
        trim: true
    },
    member1Email: {
        require : true,
        type: String,
        lowercase: true,
        trim: true
    },
    member1Phone: {
        require : true,
        type: String,
        minlength : 10,
        maxlength : 10
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
    }
})

export const Fallacy = mongoose.model('Fallacy', fallacySchema);