import { getPlantsApi, sendPlantApi } from '../apis/apiClient'

export const DISPLAY_PLANTS = 'DISPLAY_PLANTS'
export const ADD_PLANT = 'ADD_PLANT'

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
