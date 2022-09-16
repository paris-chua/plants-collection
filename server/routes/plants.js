const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const plantsArr = await db.getPlants()
    // console.log(plantsArr)
    res.json(plantsArr)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  console.log('hello', req.body)
  const { common_name, botanical_name, img } = req.body
  const data = { common_name, botanical_name, img }
  try {
    const plantArr = await db.addPlant(data)
    console.log(data, plantArr)
    const id = plantArr[0]
    const newPlant = await db.getThePlant(id)
    res.json(newPlant)
  } catch (err) {
    res.status(501).json({ message: err.message })
  }
})

module.exports = router
