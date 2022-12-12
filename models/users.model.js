import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        name : {
            type:String,
            required: true
        },
        email : {
            type:String,
            required: true,
            unique: true
        },
        password : {
            type:String,
            required: true,
        }
    },
    {timestamps : true, versionKey: false}
)

const userModel = mongoose.model("users", UserSchema)

export default userModel