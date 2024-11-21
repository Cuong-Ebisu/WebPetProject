import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  postID: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  category: {type: String, required: true},
  sdescription: {type: String, required: true},
  author: { type: String, required: true },
  datePosted: { type: Date, default: Date.now },
  content: { type: String, required: true },
  image: { type: String }
});

export default postSchema;