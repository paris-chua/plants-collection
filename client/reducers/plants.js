import { DISPLAY_PLANTS, ADD_PLANT } from '../actions/plants.js'

// const initialState = [
//   {
//     id: 1,
//     common_name: 'swiss cheese plant',
//     botanical_name: 'Monstera Deliciosa',
//     img: '/images/monstera_deliciosa.jpg',
//   },
// ]

const plantReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case DISPLAY_PLANTS:
      return payload
    case ADD_PLANT:
      return [...state, payload]
    default:
      return state
  }
}
export default plantReducer
