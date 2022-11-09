const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const plantsArr = await db.getPlants()
    console.log(plantsArr, 'plantsArr from routes')
    res.json(plantsArr)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  // console.log('hello', req.body)
  const { common_name, botanical_name, img, last_watered, additional_care } =
    req.body
  const data = {
    common_name,
    botanical_name,
    img,
    last_watered,
    additional_care,
  }
  try {
    const plantArr = await db.addPlant(data)
    // console.log(data, plantArr)
    const id = plantArr[0]
    const newPlant = await db.getThePlant(id)
    res.json(newPlant)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  console.log('routes', id)
  try {
    const removedPlant = await db.removeAPlant(id)
    res.json(removedPlant)
  } catch (err) {
    console.log(err.message)
  }
})

router.patch('/', async (req, res) => {
  // const id = req.params.id
  const newInfo = req.body
  const id = newInfo.id
  console.log(id, 'from routes')
  console.log(newInfo, 'from req.body')
  try {
    const editedPlant = await db.editPlant(newInfo)
    console.log(editedPlant, 'from routes')
    const updatedPlant = await db.getThePlant(id)
    console.log(updatedPlant, 'from routes')
    res.json(updatedPlant)
  } catch (err) {
    console.log(err.message, 'from routes')
  }
})

module.exports = router
