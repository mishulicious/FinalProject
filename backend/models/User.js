const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    role: {
      type: String,
      enum: ["admin", "client"],
      default: "client"
    },
    email: {
      type:String,
      required:true}
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

userSchema.plugin(passportLocalMongoose, {usernameField:"email"})

module.exports = mongoose.model('User', userSchema)