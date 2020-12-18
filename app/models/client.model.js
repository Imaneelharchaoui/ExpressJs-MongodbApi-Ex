const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
     id:Object,
    lastname:String,
    firstname: String,
    phone:String,
    email: String,
    street:String,
    city:String,
    Zip:Number,
    country: String,
    lat:Number,
    lng:Number,
    CreatedAt:Date,
    updatedAt:Date,
});
ClientSchema.set('timestamps', true);

module.exports = mongoose.model('client', ClientSchema);
