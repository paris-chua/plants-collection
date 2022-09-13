const config = require('./knexfile').development
const cnx = require('knex')(config)

// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')[environment]
// const cnx = require('knex')(config)

function getPlants(db = cnx) {
  return db('iPlants').select()
}

module.exports = {
  getPlants,
}
