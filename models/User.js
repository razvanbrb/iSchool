const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create user models and Schemas
const UserSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        maxlength: 32,
        required:[true, 'Name field is required']
    },

    lastname: {
        type: String,
        trim: true,
        maxlength: 32,
        required:[true, 'Last name field is required']
    },
    password:{
        type: String,
        required:[true, 'Password is required']
    },
    email:{
        type: String,
        trim: true,
        required:[true, 'Email is required'],
        unique: true
    },
    phone:{
        type: Number,
        required:false
    },
    
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },

    lists:{
        type: [],
        required:false
    },

    date: {
        type: Date,
        default: Date.now()
    }

})

UserSchema.index({location: '2dsphere'});
const User = mongoose.model('user', UserSchema);

module.exports = User;