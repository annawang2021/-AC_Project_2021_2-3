const express = require('express')
const router = express.Router()
const RestaurantSchema = require('../../models/restaurantSchema.js')

// Page for creating new restaurant
router.get('/new', (req, res) => {
  return res.render('new')
})

// Create
router.post('/', (req, res) => {
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
router.get('/:id', (req, res) => {
  const id = req.params.id
  return RestaurantSchema.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant: restaurant }))
    .catch(error => console.error(error))
})

// Edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return RestaurantSchema.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant: restaurant }))
    .catch(error => console.log(error))
})

// Update
router.put('/:id', (req, res) => {
  const id = req.params.id
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
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return RestaurantSchema.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router