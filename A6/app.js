const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose') 
const RestaurantSchema = require('./models/restaurantSchema.js')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// Connect with mongoDB
mongoose.connect('mongodb://localhost/A6-restaurantsList', { useNewUrlParser: true, useUnifiedTopology: true })

// Check mongoDB connection status
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting static files: to import bootstrap, jquery, js CDN
app.use(express.static('public'))

// Index page
app.get('/', (req, res) => {
  RestaurantSchema.find() 
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

// Page for creating new restaurant
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

// Create
app.post('/restaurants', (req, res) => {
  return RestaurantSchema.create({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    image: req.body.image,
    location: req.body.location,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Read
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return RestaurantSchema.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant: restaurant }))
    .catch(error => console.error(error))
})

// Edit page
app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return RestaurantSchema.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant: restaurant }))
    .catch(error => console.log(error))
})

// Update
app.post('/restaurants/:id/edit', (req, res) => {
  return RestaurantSchema.findById(id)
    .then(restaurant => {
      restaurant.name = req.body.name
      restaurant.name_en = req.body.name_en
      restaurant.category = req.body.category
      restaurant.image = req.body.image
      restaurant.location = req.body.location
      restaurant.phone = req.body.phone
      restaurant.google_map = req.body.google_map
      restaurant.rating = req.body.rating
      restaurant.description = req.body.description
      return restaurant.save() // .save()針對一筆資料更新
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// Delete
app.post('/restaurants/:id/delete', (req, res) => {
  const id = req.params.id
  return RestaurantSchema.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Search
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  if (keyword === "") {
    res.redirect("/")
  }
  return RestaurantSchema.find()
    .lean()
    .then(restaurants => {
      const restaurantSearched = restaurants.filter(item => item.name.toLowerCase().includes(keyword) || item.category.toLowerCase().includes(keyword))
      res.render('index', { restaurants: restaurantSearched, keyword: keyword })
    })
    .catch(error => console.error(error))
})

// Start the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})