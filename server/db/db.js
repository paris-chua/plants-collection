const config = require('./knexfile').development
const cnx = require('knex')(config)

// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')[environment]
// const cnx = require('knex')(config)

function getPlants(db = cnx) {
  return db('iPlants').select()
}

function addPlant(plant, db = cnx) {
  return db('iPlants').insert(plant)
}

function getThePlant(id, db = cnx) {
  return db('iPlants').where('id', id).first()
}

module.exports = {
  getPlants,
  addPlant,
  getThePlant,
}
