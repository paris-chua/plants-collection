const config = require('./knexfile').development
const cnx = require('knex')(config)

function getPlants(db = cnx) {
  return db('iPlants').select()
}

module.exports = {
  getPlants,
}
