const express = require('express')
const app = express()
const logger = require('../node_modules/logger/logger')
const authorize = require('../node_modules/authorize')


//  req => middleware => res
app.use([logger, authorize])
/*
app.use(): This method adds middleware to the application. Here, 
logger and authorize middleware are added.
Middleware functions are executed in the order they are added. 
They have access to the request (req) and
response (res) objects and can modify them or terminate the request-response cycle.
*/
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
