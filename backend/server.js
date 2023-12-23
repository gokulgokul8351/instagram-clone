const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { mongoUrl } = require('./key.js')
const PORT = 5000
const cors = require('cors')

// cors

app.use(cors())

// validate route in sig and login
require('./models/models.js')
// validate route in create post
require('./models/post.js')

app.use(express.json())

// validate route in sig and login
app.use(require('./router/auth.js'))
// validate route in create post
app.use(require('./router/createPost.js'))

mongoose.connect(mongoUrl)

mongoose.connection.on('connected', () => {
  console.log('successfully connected to mongodb')
})

mongoose.connection.on('error', () => {
  console.log('not connected to mongodb')
})

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})

// const express = require('express')
// const app = express()
// const PORT = 5000
// const cors = require('cors')
// const data = require('./data.js')

// app.use(cors())

// app.get('/', (req, res) => {
//   res.json('hello Gokul')
// })

// app.get('/about', (req, res) => {
//   res.json(data)
// })

// app.listen(PORT, () => {
//   console.log(`server is running on ${PORT}`)
// })
