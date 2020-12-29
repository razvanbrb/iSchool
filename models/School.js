const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentsSchema = new Schema( {
    body:{
    type: String,
    required: true
    },
    authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
    },
    date: {
       type: Date,
       default: Date.now()
    }
 })



// Create user models and Schemas
const SchoolSchema = new Schema({
    name: {
        type: String,
        required:[true, 'Name field is required']
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
 
    phone: {
        type: String,
        required:[true, 'Phone number field is required']
    },
 
    email:{
        type: String,
        required:[true, 'Email is required']
    },
 
    rating: {
        type: Number,
        required:false
    },
 
    types:{
        type: String,
        enum : ['Public','Private'],
        required:[true, 'Types is required']
    },
 
    areas:{
        type: [String],
         enum : ['General','Technical','Vocational','Art Secondary Education' ],
        required:[true, 'Areas is required']
    },
    network:{
        type: String,
         enum : ['GO Network','Catholic Network','Municipality Schools','Private schools' ],
        required:[true, 'Network is required']
    },
    languageClasses: {
       type: Boolean,
       required:[true, 'Language classes is required']
   } ,
    comments: [CommentsSchema],
   photo: {
       type: String,
       required:[true, 'Photo is required']
   },
 
   website: {
       type: String,
       required:[true, 'Website is required']
    },

    address:{
        city:{
            type:String,
            required: true
        },
        street:{
            type:String,
            required: true
        },
        num:{
            type:String,
            required: true
        }
    },
 
    date: {
        type: Date,
        default: Date.now()
    }

})

SchoolSchema.index({location: '2dsphere'});
SchoolSchema.index({ adress: 1, name: 1 }, { unique: true });
const School = mongoose.model('School',SchoolSchema, 'schools');

module.exports = School;