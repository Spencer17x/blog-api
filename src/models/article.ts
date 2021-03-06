import { Schema, model } from 'mongoose';

const ArticleSchema = new Schema({
  __v: { type: String, select: false },
  title: { type: String, required: true },
  subtitle: { type: String, required: false },
  description: { type: String, required: false },
  content: { type: String, required: false },
  author: { type: Schema.Types.ObjectId, ref: 'user', select: true }
}, {
  timestamps: true
});

export default model('article', ArticleSchema, 'article');
