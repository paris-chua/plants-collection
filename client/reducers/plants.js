import { DISPLAY_PLANTS } from '../actions/plants.js'

const initialState = [
  {
    id: 1,
    common_name: 'swiss cheese plant',
    botanical_name: 'Monstera Deliciosa',
    img: '/images/monstera_deliciosa.jpg',
  },
]

const plantReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case DISPLAY_PLANTS:
      return payload
    default:
      return state
  }
}
export default plantReducer
