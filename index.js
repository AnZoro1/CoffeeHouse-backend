const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(require('./routes/drinks.route.js'))
app.use(require('./routes/in_stocks.route'))
mongoose
  .connect(
    'mongodb+srv://into:code@cluster0.lz09cai.mongodb.net/CoffeeHouse?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Успешно соединились с сервером MongoDB')
  })
  .catch(() => {
    'Ошибка при соединении с сервером MongoDB'
  })
app.listen(4000, () => {
  console.log('Сервер запущен успешно!')
})
