const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.findByCredetials = async function (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch){
    throw new Error("Unable to login");
  }

  return user;
}



const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};