const { model, Schema } = require("mongoose");

const UserShema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  activationLink: { type: String },
});

module.exports = model("User", UserShema);
