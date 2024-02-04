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
        require : true,
        type: String,
        lowercase: true,
        trim: true
    },
    member2Email: {
        require : true,
        type: String,
        lowercase: true,
        trim: true
    },
    member2Phone: {
        require : true,
        type: String,
        minlength : 10,
        maxlength : 10
    }
})

export const Fallacy = mongoose.model('Fallacy', fallacySchema);