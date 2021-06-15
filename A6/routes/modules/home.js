const express = require('express')
const router = express.Router()
const RestaurantSchema = require('../../models/restaurantSchema.js')

// Index page
router.get('/', (req, res) => {
  const sortBy = req.query.sortBy || '-_id'
  RestaurantSchema.find()
    .lean()
    .sort(sortBy)
    .then(restaurants => res.render('index', { restaurants, sortBy }))
    .catch(error => console.error(error))
})

module.exports = router