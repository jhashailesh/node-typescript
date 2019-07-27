import {Schema, Model, model} from "mongoose";
import { IUserModel } from "./user.interface";

// This will provide hints in intellisense when you create 
// new instance of particular mode . 
// It can help to increase the productivity.


export const UserSchema: Schema = new Schema({
  email: String,
  name: String,
  age:Number
},
{
  timestamps: true
});


UserSchema.pre("save", async (next)=>{
  // Anything you want to do 
  // before saving anything
  next();
});

UserSchema.methods.fullName = function(): string {
  return (this.name.trim() + " " + this.age.trim());
};

UserSchema.methods.isEmailExist = async function():Promise<boolean> {
  return 0 < await User.findOne({email: this.email}).countDocuments();
};

UserSchema.methods.addNewUser = async function () {
  return this.save();
}

export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);
