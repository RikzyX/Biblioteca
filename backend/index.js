const express = require('express')
const app = express()
require('dotenv').config()
const routesUsers = require('./User/routes/routes')
const routesBooks = require('./Book/routes/routes')
const routesRecom = require('./Recommendation/routes/routes')
const routesCopy = require('./Copys/routes/routes')
const routesLoans = require('./Loans/routes/routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ type: '*/*' }))

const port = process.env.DB_PORT
app.use(express.static('static'))
app.use(routesUsers)
app.use(routesBooks)
app.use(routesRecom)
app.use(routesCopy)
app.use(routesLoans)
app.listen(port, () => {
  console.log(` 🏓 Running on port ${port}`)
})
