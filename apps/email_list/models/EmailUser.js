
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailUserSchema = new Schema({
	email: { type: String, required: true },
  is_confirmed: { type: Boolean, required: true },
}, 
  {timestamps: true },
);

module.exports = mongoose.models.EmailUser || mongoose.model("EmailUser", EmailUserSchema);
