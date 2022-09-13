const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const plantsArr = await db.getPlants()
    res.json(plantsArr)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
