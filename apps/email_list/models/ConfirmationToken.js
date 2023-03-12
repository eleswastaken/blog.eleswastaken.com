
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  email_user: {type: mongoose.Schema.Types.ObjectId, ref: 'EmailUser'},
	token: { type: String, required: true },
  is_active: { type: Boolean, required: true, default: true }
}, 
  {timestamps: true },
);

module.exports = mongoose.models.ConfirmationToken || mongoose.model("ConfirmationToken", TokenSchema);
