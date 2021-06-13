const express = require('express')
const router = express.Router()
const RestaurantSchema = require('../../models/restaurantSchema.js')

// Index page
router.get('/', (req, res) => {
  RestaurantSchema.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

module.exports = router