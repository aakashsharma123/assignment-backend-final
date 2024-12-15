import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ //user login and register schema
  
  name : {
    type : String , 
    required : true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  }
});

const userModel = mongoose.model ("users" , userSchema)

export default userModel
