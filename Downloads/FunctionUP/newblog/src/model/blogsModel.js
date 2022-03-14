const mongoose = require('mongoose');

// { title: {mandatory}, body: {mandatory}, authorId: {mandatory, refs to author model}, tags: {array of string}, 
// category: {string, mandatory, examples: [technology, entertainment, life style, food, fashion]}, 
// subcategory: {array of string, examples[technology-[web development, mobile development, AI, ML etc]] }, 
// createdAt, updatedAt, deletedAt: {when the document is deleted}, 
// isDeleted: {boolean, default: false}, publishedAt: {when the blog is published}, isPublished: {boolean, default: false}}

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Author
    },
    tags:{
        type:[String],
        required:true
    }



},{timestamps:true})


module.exports = mongoose.model('Author',authorSchema);