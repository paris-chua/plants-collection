const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const plantsArr = await db.getPlants()
    console.log(plantsArr)
    res.json(plantsArr)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  const { common, botanical } = req.body
  const data = { common, botanical }
  try {
    const newPlant = await db.addPlant(data)
    res.json(newPlant)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
