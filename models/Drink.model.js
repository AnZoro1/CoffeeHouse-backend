const mongoose = require('mongoose')
const DrinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  in_stock: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'In_stock',
  },
  caffeine: String,
  volume: String,
  description: String,
})
const Drink = mongoose.model('Drink', DrinkSchema)
module.exports = Drink
