/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('iPlants').del()
  await knex('iPlants').insert([
    {
      id: 1,
      common_name: 'swiss cheese plant',
      botanical_name: 'Monstera Deliciosa',
      img: '/images/monstera_deliciosa.jpg',
    },
    {
      id: 2,
      common_name: 'rubber plant',
      botanical_name: 'Ficus Elastica',
      img: '/images/ficus_elastica.jpg',
    },
    {
      id: 3,
      common_name: 'snake plant',
      botanical_name: 'Sansevieria',
      img: '/images/sansevieria.jpg',
    },
    {
      id: 4,
      common_name: 'satin pothos',
      botanical_name: 'Scindapsus Pictus',
      img: '/images/scindapsus_pictus.jpg',
    },
    {
      id: 5,
      common_name: 'flamingo lily',
      botanical_name: 'Anthurium',
      img: '/images/anthurium.jpg',
    },
  ])
}
