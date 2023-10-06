const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    name: {
        type: String,
        required: true,
    },
    uniqueid:{
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }

    },
    {
        collection: 'UserData', // specify the custom collection name
    }
)

module.exports = mongoose.model('User', userSchema)
