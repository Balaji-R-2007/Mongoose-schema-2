const mongoose = require('mongoose');

const comments=new mongoose.Schema({
    username: {
        type: String,
     
    },
    message: {
        type: String,
        required: true
    },
    commentedAt: {
        type: Date,
        default: Date.now
    }
});

const blogschema = new mongoose.Schema({
    title: {
    type:String,
    required: true,
    unique: true,
    minlength: 5
},
    
    content: {
    type:String,
    required: true,
    minlength: 50
},
    author: {
    type: String,
    required: true
},
    tags: {
        type:[String],
},
    category: {
    type: String,
    default: "General"
},
    likes: {
    type:[String],
},
    comments: [comments],

    createdAt: {
    type: Date,
    default: Date.now
},
    updatedAt: {
    type: Date
}
});


module.exports = mongoose.model('Blog', blogschema);
