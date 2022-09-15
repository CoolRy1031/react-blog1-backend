import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref:"Profile"}
},{
  timestamps: true,
})

const postSchema = new mongoose.Schema({
  title: String,
  author: {type:mongoose.Schema.Types.ObjectId, ref: 'Profile'},
  comments: [commentSchema],
  content: String,
},{
  timestamps: true,
})

const Post = mongoose.model('Post', postSchema)

export{
  Post
}

