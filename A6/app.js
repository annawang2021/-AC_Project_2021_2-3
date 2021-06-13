const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
// const RestaurantSchema = require('./models/restaurantSchema.js')
const routes = require('./routes')
require('./config/mongoose')
const app = express()

// set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting static files: to import bootstrap, jquery, js CDN
app.use(express.static('public'))

// setting methodOverride
app.use(methodOverride('_method'))

app.use(routes)


// Start the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})