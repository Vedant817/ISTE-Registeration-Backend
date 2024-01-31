import mongoose, {Schema} from 'mongoose';

const registerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please Enter valid email'],
        unique: true,
        lowercase: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please Enter the valid Phone Number'],
    },
    teamName: {
        type: String,
        required: [true, 'Please Enter the Team Name'],
        lowercase: true,
        trim: true,
        unique: false
    }
})

export const RegisterUser = mongoose.model('Registered_User', registerSchema);