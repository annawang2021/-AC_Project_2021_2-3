
>
A8: Upgrade-A6 project: Restaurant List
=============================

![image](https://user-images.githubusercontent.com/77376405/121671730-81427280-cae1-11eb-8d7f-7e39d55b330e.png)

![image](https://user-images.githubusercontent.com/77376405/121671816-a0d99b00-cae1-11eb-91f2-48303e6da13f.png)

![image](https://user-images.githubusercontent.com/77376405/121671943-c4044a80-cae1-11eb-82d1-cdf5205760c2.png)




 ##  Feature
1. Display a list of restaurant at landing page http://localhost:3000 

2. Filter the preferred items with search bar

3. CRUD db functions 

4. Show details of each restaurant 
   
5. Form validity
   
6. Sort bar


## To start the server

```js script
$npm run dev
```

```
// package.json
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "seed": "node models/seeds/restaurantSeeder.js"
}
```

 ## Built with 

1. **Node.js (v14.15.4)**
  
2. **Express (v4.17.1)**
 ```
 $ npm init -y
 $ npm install express
 ```

3. **nodemon**
 ```
 $ npm install nodemon -g
 ```

4. **Express-Handlebars (v5.3.2)**
 ```
 $ npm i express-handlebars
 ```
 to import handlebars into node.js, using <span style='color: red'>`require`</span>

 ```js script
 const exhbs =require('express-handlebars')
 ```

5. **Express.js body-parser**
 ```js script
 $ npm install body-parser
 ```

 ```js script
 // setting body-parser
 app.use(express.urlencoded({ extended: true }))
 ```

6. **MongoDB, Mongoose**
 ```js script
 $npm install mongoose
 ```

 to import Mongoose in node.js
 ```js script
 const mongoose = require('mongoose') 
 
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
```

7. **handlebars-helpers**
  ```js
  $ npm install --save handlebars-helpers
  ```


  ```js
  const hbshelpers = require('handlebars-helpers')
  const helpers = hbshelpers()
  ```

8. **Bootstrap (v4.3.1) with CDN**
   
9. **FontAwesomewith CDN**
