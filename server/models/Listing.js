const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: [{
        type: String
    }],
    listingDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'sold', 'traded'],
        default: 'active'
    }
});

module.exports = Listing = mongoose.model('Listing', ListingSchema);
