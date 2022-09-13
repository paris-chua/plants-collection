import { combineReducers } from 'redux'

// import stuff from './stuff'
import plantReducer from './plants'

export default combineReducers({
  plants: plantReducer,
})
