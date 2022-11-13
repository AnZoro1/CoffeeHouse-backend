const Drink = require('../models/Drink.model')
const In_stock = require('../models/In_stock.model')

const In_stockController = {
  addIn_stock: function (req, res) {
    In_stock.create({
      name: req.body.name,
    }).then((in_stocks) => {
      res.json(in_stocks)
    })
  },
  deleteIn_stock: function (req, res) {
    In_stock.findByIdAndDelete(req.params.id).then((in_stocks) => {
      res.json(in_stocks)
    })
  },
  getIn_stocks: function (req, res) {
    In_stock.find({}, (err, in_stocks) => {
      res.json(in_stocks)
    })
  },
}

module.exports = In_stockController
