const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const USER = mongoose.model('USER')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Jwt_secret } = require('../key.js')
const requireLogin = require('../middlewares/requireLogin.js')

router.get('/', (req, res) => {
  res.send('hello')
})

// createPost authentication st

// router.get('/createPost', requireLogin, (req, res) => {
//   console.log('hello h auth')
// })

// createPost authentication end

// signup authentication st

router.post('/signup', (req, res) => {
  const { name, userName, email, password } = req.body

  //   validation

  if (!name || !userName || !email || !password) {
    return res.status(422).json({ error: 'Please add all the filed' })
  }

  USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then(
    (savedUser) => {
      // validate new user vs old user (compare for email)

      if (savedUser) {
        return res.status(422).json({
          error: 'User already exist with that email or userName',
        })
      }

      //   bcrypt validation

      bcrypt.hash(password, 10).then((hashPassword) => {
        // validate old user st

        const user = new USER({
          name,
          userName,
          email,
          password: hashPassword,
        })
        user
          .save()
          .then((user) => {
            res.json({ message: 'Register saved successfully' })
          })
          .catch((error) => console.log(error))

        // validate old user end
      })
    }
  )
})

// signup authentication end

// login authentication st

router.post('/login', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).json({ error: 'Please add email and password' })
  }

  USER.findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: 'Invalid Email' })
      }

      bcrypt.compare(password, savedUser.password).then((match) => {
        // password === login user password
        if (match) {
          // return res.status(200).json({ message: 'Login successfully' })

          // jwt data checking st

          const token = jwt.sign({ _id: savedUser.id }, Jwt_secret)
          res.json(token)
          console.log(token)

          // jwt data checking end
        } else {
          // don't match password

          return res.status(422).json({
            error: 'Invalid Password',
          })
        }
      })
    })
    .catch((error) => console.log(error))
})

// login authentication end

module.exports = router
