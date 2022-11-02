/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('iPlants', (table) => {
    table.string('last_watered')
    table.string('additional_care')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('iPlants', (table) => {
    table.dropColumn('last_watered')
    table.dropColumn('additional_care')
  })
}
