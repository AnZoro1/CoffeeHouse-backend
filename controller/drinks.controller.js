const Drink = require('../models/Drink.model')

const DrinkController = {
  getAllDrinks: function (req, res) {
    Drink.find({}, (err, drinks) => {
      res.json(drinks)
    })
  },
  getStockDrinks: function (req, res) {
    Drink.find({ in_stock: req.params.id }, (err, drinks) => {
      res.json(drinks)
    }).populate('in_stock')
  },
  getDrinkInfo: function (req, res) {
    Drink.findById(req.params.DrinkId, (err, drinks) => {
      res.json(drinks)
    }).populate('in_stock')
  },

  addNewDrink: function (req, res) {
    Drink.create({
      name: req.body.name,
      price: req.body.price,
      in_stock: req.body.in_stock,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    }).then((drinks) => {
      res.json(drinks)
    })
  },
  deleteDrink: function (req, res) {
    Drink.findByIdAndRemove(req.params.id).then((drinks) => {
      res.json(drinks)
    })
  },
  changeDrink: function (req, res) {
    Drink.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      in_stock: req.body.in_stock,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    }).then((drinks) => {
      res.json(drinks)
    })
  },
}

module.exports = DrinkController
