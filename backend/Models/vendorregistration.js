const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true,
        trim: true,
    },
    businessType: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, // To ensure the email is unique for each vendor
       
    },
    password: {
        type: String,
        required: true,
    },

    // profilePhoto: {
    //     type: String, // Store the file path or URL of the uploaded image
    //     // required: true,
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create a model from the schema
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
