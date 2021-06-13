const RestaurantSchema = require('../restaurantSchema')
const restaurantList = require('../../restaurants.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 8; i++) {
    RestaurantSchema.create({
      id: i + 1,
      name: restaurantList.results[i].name,
      name_en: restaurantList.results[i].name_en,
      category: restaurantList.results[i].category,
      image: restaurantList.results[i].image,
      location: restaurantList.results[i].location,
      phone: restaurantList.results[i].phone,
      google_map: restaurantList.results[i].google_map,
      rating: restaurantList.results[i].rating,
      description: restaurantList.results[i].description
    })
  }
  console.log('done')
})
