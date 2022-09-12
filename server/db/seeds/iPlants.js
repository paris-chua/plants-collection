/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('iPlants').del()
  await knex('iPlants').insert([
    { id: 1, common_name: 'swiss cheese plant', botanical_name: Monstera Deliciosa},
    { id: 2, common_name: 'rubber plant', botanical_name: Ficus Elastica},
    { id: 3, common_name: 'snake plant', botanical_name: Sansevieria},
    { id: 4, common_name: 'satin pothos', botanical_name: Scindapsus Pictus},
    { id: 5, common_name: 'flamingo lily', botanical_name: Anthurium},
  ])
}
