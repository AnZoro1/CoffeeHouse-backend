const { Router } = require('express')
const In_stockController = require('../controller/in_stocks.controller')
const router = Router()
router.post('/in_stocks', In_stockController.addIn_stock)
router.delete('/in_stocks/:id', In_stockController.deleteIn_stock)
router.get('/in_stocks', In_stockController.getIn_stocks)
module.exports = router
