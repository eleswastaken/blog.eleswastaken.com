const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },

    metaTitle: { type: String }, 

    tags: { type: Array },

    },
  {timestamps: true },
)


module.exports = mongoose.model('Post', PostSchema);
