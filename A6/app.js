const express = require('express')
const port = 3000
const mongoose = require('mongoose') 
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
// const RestaurantSchema = require('./models/restaurantSchema.js')
const routes = require('./routes')

const app = express()



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

// setting methodOverride
app.use(methodOverride('_method'))

app.use(routes)


// Start the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})