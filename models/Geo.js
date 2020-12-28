const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates: {
        type: [Number],
    }
});

GeoSchema.index({coordinates: '2dsphere'});
module.exports = GeoSchema;