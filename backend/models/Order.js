const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    user:{
      type: Schema.Types.ObjectId,
      ref:"User"
    },
    date: String,
    hour: String,
    place: String,
    total: String,
    downpayment: String

},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})


module.exports = mongoose.model('Order', orderSchema)