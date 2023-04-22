const express = require('express')
const router = express.Router()

// Import your userDataSchema
const { UserData } = require('../models/models')

// GET user by username
router.get('/username/:username', (req, res, next) => {
  UserData.findOne({ username: req.params.username }, (error, data) => {
    if (error) {
      return next(error)
    } else if (!data) {
      res.status(400).send('User not found')
    } else {
      // Return only the username and role, do not expose the password
      res.json({ username: data.username, role: data.role })
    }
  })
})

// POST new user
router.post('/', (req, res, next) => {
  const newUser = req.body
  UserData.create(newUser, (error, data) => {
    if (error) {
      return next(error)
    } else {
      // Return only the username and role, do not expose the password
      res.json({ username: data.username, role: data.role })
    }
  })
})

// Other routes for users can be added here

module.exports = router