const express = require('express')
const router = express.Router()
const RestaurantSchema = require('../../models/restaurantSchema.js')

router.get('/', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  const sortBy = req.query.sortBy || '_id'
  if (keyword === '') {
    res.redirect('/')
  }
  return RestaurantSchema.find()
    .lean()
    .sort(sortBy)
    .then(restaurants => {
      const restaurantSearched = restaurants.filter(item => item.name.toLowerCase().includes(keyword) || item.category.toLowerCase().includes(keyword))
      res.render('index', { restaurants: restaurantSearched, keyword: keyword })
    })
    .catch(error => console.error(error))
})

module.exports = router
