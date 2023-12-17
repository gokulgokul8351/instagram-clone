const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const POST = mongoose.model('POST')

// all post get in to st

router.get('/allposts', requireLogin, (req, res) => {
  POST.find()
    .populate('postedBy', '_id name')
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err))
})

// all post get in to end

router.post('/createPost', requireLogin, (req, res) => {
  const { body, photo } = req.body

  // validate post

  if (!body || !photo) {
    return res.status(422).json({ error: 'Please add all the fields' })
  }

  //   console.log(res.user)

  const post = new POST({
    body,
    photo: photo,
    postedBy: req.user,
  })
  post
    .save()
    .then((result) => {
      return res.status(200).json({ post: result })
    })
    .catch((error) => console.log(error))
})

module.exports = router
