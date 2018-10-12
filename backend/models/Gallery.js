const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gallerySchema = new Schema({
    title: String,
    photoURL: String,
    comments: [{
      type: Schema.Types.ObjectId,
      ref:"Comment"
    }],
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})


module.exports = mongoose.model('Gallery', gallerySchema)