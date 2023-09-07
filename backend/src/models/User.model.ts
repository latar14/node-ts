import mongoose, { Schema } from "mongoose";

interface IUser {
    email: string;
    number: string;
}

const userSchema = new Schema<IUser>({
    email: {type: String, requared: true},
    number: {type: String, requared: true}
})


const User = mongoose.model("User", userSchema);

module.exports = User;