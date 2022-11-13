const mongoose = require('mongoose')
const In_stockSchema = mongoose.Schema({
  name: String,
})
const In_stock = mongoose.model('In_stock', In_stockSchema)
module.exports = In_stock
