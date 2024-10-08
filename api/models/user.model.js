import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
      required: true, 
      unique: true,
    }
    emaill: {
      type: String,
    required: true, 
    unique: true,
  }
  password: {
    type: String,
  required: true, 
}
}, { timestamps: true});

const Users = mongoose.model('User', userSchema);

export default Users;