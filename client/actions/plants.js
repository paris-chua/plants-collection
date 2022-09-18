import { deletePlantApi, getPlantsApi, sendPlantApi } from '../apis/apiClient'

export const DISPLAY_PLANTS = 'DISPLAY_PLANTS'
export const ADD_PLANT = 'ADD_PLANT'
export const DELETE_PLANT = 'DELETE_PLANT'

export function displayPlants(arr) {
  return {
    type: DISPLAY_PLANTS,
    payload: arr,
  }
}

// below is a thunk which makes the async api call,
// the result of the call dispatch an action that set up the store
export function fetchPlants() {
  return (dispatch) => {
    return getPlantsApi().then((plants) => {
      dispatch(displayPlants(plants))
    })
  }
}

export function addNewPlant(plant) {
  return {
    type: ADD_PLANT,
    payload: plant,
  }
}

export function sendNewPlant(data) {
  return (dispatch) => {
    return sendPlantApi(data).then((res) => {
      dispatch(addNewPlant(res))
    })
  }
}

export function removePlant(id) {
  console.log('from action', id)
  return {
    type: DELETE_PLANT,
    payload: id,
  }
}

export function deletePlant(id) {
  console.log(id)
  return (dispatch) => {
    return deletePlantApi(id).then(() => {
      dispatch(removePlant(id))
    })
  }
}
