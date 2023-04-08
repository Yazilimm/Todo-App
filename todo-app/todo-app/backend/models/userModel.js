const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)