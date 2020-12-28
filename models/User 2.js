const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GeoSchema = require('./School')

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
    
   geometry: GeoSchema,

    lists:{
        type: [],
        required:false
    },

    date: {
        type: Date,
        default: Date.now()
    }

})
// UserSchema.index({ domain_data: '2dsphere' });
const User = mongoose.model('user', UserSchema);

module.exports = User;